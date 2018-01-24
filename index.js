import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      docViews: ['plugins/la_message_view/doc_view/la_message']
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }
    

  });
};
