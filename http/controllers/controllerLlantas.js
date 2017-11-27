var db = require('../relations');
var llantas = db.llantas;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    llantas.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    llantas.findById(id).then(function(llantas) {
        llantas.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    llantas.update(data, {
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
        llantas.findAll({
            
            where: {
                tipo: id
        }
    }).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        llantas.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};
