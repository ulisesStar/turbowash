var db = require('../relations');
var areas = db.areas;
var servicios = db.servicios;
var herramientas = db.herramientas;
var paquetes = db.paquetes;
var items = db.items;
var multimedia = db.multimedia;
var portada = db.portada;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    areas.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    areas.findById(id).then(function(areas) {
        areas.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    areas.update(data, {
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
        areas.findById(id, {
            include : [
                {model: servicios},
                {model: herramientas},
                // {model: multimedia},
                // {model: portada},
                {
                    model: paquetes,
                    include: [
                        { model: items }
                    ]

                },

            ]
        }).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        areas.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
