const functions = require('firebase-functions');

export.webhook = functions.https.onRequest((request, response) => {
  responde.send({
    speech: "Hello World!"
  });
});
