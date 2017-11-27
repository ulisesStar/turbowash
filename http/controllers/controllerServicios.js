var db = require('../relations');
var servicios = db.servicios;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    servicios.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    servicios.findById(id).then(function(servicios) {
        servicios.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    servicios.update(data, {
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
        servicios.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        servicios.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
