var api_key = 'key-c692523b1336ce3b25a256d874bf61ef';
var domain = 'www.turbowash.mx';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var ex = module.exports = {};

ex.mail = function(req, res, next) {

    var data = {
      from: 'Excited User <me@samples.mailgun.org>',
      to: 'ulises256@gmail.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    };

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });

};
