var db = require('../relations');
var promociones = db.promociones;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    promociones.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    promociones.findById(id).then(function(promociones) {
        promociones.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    promociones.update(data, {
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
        promociones.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        promociones.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
