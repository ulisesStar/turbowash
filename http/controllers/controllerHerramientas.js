var db = require('../relations');
var herramientas = db.herramientas;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    herramientas.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    herramientas.findById(id).then(function(herramientas) {
        herramientas.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    herramientas.update(data, {
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
        herramientas.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        herramientas.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
