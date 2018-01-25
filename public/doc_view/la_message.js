//import angular from 'angular';
//import 'ace';
import { DocViewsRegistryProvider } from 'ui/registry/doc_views';

import la_message_template from './la_message.html';

import '../lib/json-viewer/json-viewer.css';
import { JSONViewer } from '../lib/json-viewer/json-viewer-angular';

DocViewsRegistryProvider.register(function () {
  return {
    title: 'LA Message',
    order: 1,
    directive: {
      template: la_message_template,
      scope: {
        hit: '='
      },
      controller: function ($scope) {
        //$scope.hitJson = angular.toJson($scope.hit._source, true);

        // $scope.aceLoaded = (editor) => {
          // editor.$blockScrolling = Infinity;
        // };
      },
			link: ($scope, elem) => {
			
			var resultElement = elem;
			var text = $scope.hit._source.message;
			
			if (_.isUndefined(text) || _.isNull(text) || text.toString().length <= 0) {
				//Nothing to display - message is empty
				resultElement.append("Nothing to display - message is empty");
				
				return;
			}
			
			// Check if Message contains JSON
			var looksLikeJson = false;
			var tmpInd = 0;
			
			if (text[0] === "{") {
				looksLikeJson = true;
			}
			else {
				// In LA Logs there is sometimes a new line before JSON document
				tmpInd = text.indexOf("\r\n{");
				if (tmpInd !== -1) {
					looksLikeJson = true;
				}
			}
			
			if (looksLikeJson) {
				var jsonObj = null;
				
				try {
					jsonObj = JSON.parse(text);
				} 
				catch (e) {
					// is it not a json, do nothing
				}
				
				if (jsonObj != null) {
					// json was parsed, include interactive plugin
					var expandLevel = 4;
					var jsonViewer = new JSONViewer();
					jsonViewer.showJSON(jsonObj, null, expandLevel);
					resultElement.append(jsonViewer.getContainer());
					
					return;
				}
			}
			
			
			// Message is not JSON, so just display it as is
			var rawMessage = text
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/(https?\:\/\/[\w\.\/\?\=\&\%\#\-\:\;]+)/g, '<a href="$1">$1</a>')
				.replace(/\r?\n/g, '<br/>');
				
			resultElement.append(rawMessage);
			
      }
    }
  };
});
