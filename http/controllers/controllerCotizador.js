var db = require('../relations');
var cotizador = db.cotizador;

var api_key = 'key-c692523b1336ce3b25a256d874bf61ef';
var domain = 'www.turbowash.mx';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var ex = module.exports = {};


var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    cotizador.create(data).then(function(result) {

        var direcciones = [ 'cotizallantas@turbowash.com.mx', 'angelica@turbowash.com.mx', 'arenasgtz92@gmail.com', 'natasha@turbowash.com.mx', 'areli@turbowash.com.mx', 'pruebas@turbowash.com.mx '];

        direcciones.forEach(direccion => {

            var mail = {
                from: 'Cotizacion o Contacto <noreply@turbowash.mx>',
                subject: 'Tienes una nueva cotizacion',
                to: direccion,
                html:
                    '<p>Tienes un nuevo contacto, Estos son sus datos: </p>' +
                    '<ul>' +
                        '<li> nombre:' + data.nombre  + '</li>' +
                        '<li> telefono:' + data.telefono  + '</li>' +
                        '<li> celular:' + data.telefono  + '</li>' +
                        '<li> email:' + data.email  + '</li>' +
                        '<li> ancho:' + data.ancho  + '</li>' +
                        '<li> perfil:' + data.perfil  + '</li>' +
                        '<li> rin:' + data.rin  + '</li>' +
                        '<li> velocidad:' + data.velocidad  + '</li>' +
                        '<li> mensaje:' + data.mensaje  + '</li>' +
                        '<li> auto:' + data.auto  + '</li>' +
                        '<li> marca:' + data.marca  + '</li>' +
                    '</ul>'
            };

            mailgun.messages().send(mail, function (error, body) {

            });

        })

        res.status(200).jsonp('se mando el correo');

    });


};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    cotizador.findById(id).then(function(cotizador) {
        cotizador.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    cotizador.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};

ex.read = function(req, res, next) {

    var id = req.params.id;

    if (id) {
        cotizador.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        cotizador.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
