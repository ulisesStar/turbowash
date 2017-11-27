var db = require('../relations');
var contacto = db.contacto;

var api_key = 'key-c692523b1336ce3b25a256d874bf61ef';
var domain = 'www.turbowash.mx';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    contacto.create(data).then(function(result) {


        var direcciones = [ 'contactoweb@turbowash.com.mx', 'dianar@turbowash.com.mx', 'pruebas@turbowash.com.mx'];

        direcciones.forEach(direccion => {

            var mail = {
                from: 'Cotizacion o Contacto <noreply@turbowash.mx>',
                subject: 'Esta persona te quiere contactar',
                to: direccion,
                html:
                    '<p>Tienes un nuevo contacto, Estos son sus datos: </p>' +
                    '<ul>' +
                        '<li> nombre:' + data.nombre  + '</li>' +
                        '<li> telefono:' + data.telefono  + '</li>' +
                        '<li> email:' + data.email  + '</li>' +
                        '<li> mensaje:' + data.mensaje  + '</li>' +
                    '</ul>'
            };

            mailgun.messages().send(mail, function (error, body) {

            });

        })

        res.status(200).jsonp('Se han mandado los correos');

    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    contacto.findById(id).then(function(contacto) {
        contacto.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    contacto.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp({msj: 'SUCCESS!'});
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        contacto.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        contacto.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
