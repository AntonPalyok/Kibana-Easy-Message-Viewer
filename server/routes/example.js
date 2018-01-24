export default function (server) {

  server.route({
    path: '/api/la_message_view/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
