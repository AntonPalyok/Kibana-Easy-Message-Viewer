import angular from 'angular';
//import 'ace';
import { DocViewsRegistryProvider } from 'ui/registry/doc_views';

import jsonHtml from './la_message.html';

DocViewsRegistryProvider.register(function () {
  return {
    title: 'LA Message',
    order: 1,
    directive: {
      template: jsonHtml,
      scope: {
        hit: '='
      },
      controller: function ($scope) {
        $scope.hitJson = angular.toJson($scope.hit, true);

        // $scope.aceLoaded = (editor) => {
          // editor.$blockScrolling = Infinity;
        // };
      }
    }
  };
});
