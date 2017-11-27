var db = require('../relations');
var portada = db.portada;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    portada.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    portada.findById(id).then(function(portada) {
        portada.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    portada.update(data, {
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
        portada.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        portada.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.Xarea = function(req, res, next) {

    var id = req.params.id;

    portada.findAll({
        where: {
            id_area : id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};
