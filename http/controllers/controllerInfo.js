var db = require('../relations');
var info = db.info;
var servicios = db.servicios;
var paquetes = db.paquetes;
var herramientas = db.herramientas;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    info.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.infoXareas = function(req, res, next) {

    var id = req.params.id;

    info.findAll({
        where:{
            idAreas: id
        },
        include: [
            {
                model: servicios,
                attributes:
    					['id', 'nombre']
            },
            {
                model: paquetes,
                attributes:
                        ['id', 'nombre', 'descripcion', 'precio']
            },
            {
                model: herramientas,
                attributes:
                        ['id', 'nombre']
            }
        ],
        attributes: ['id', 'contenido']
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};


ex.delete = function(req, res, next) {

    var id = req.params.id;

    info.findById(id).then(function(info) {
        info.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    info.update(data, {
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
        info.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        info.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
