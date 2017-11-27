var db = require('../relations');
var multimedia = db.multimedia;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    multimedia.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    multimedia.findById(id).then(function(multimedia) {
        multimedia.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {
    var id = req.params.id;
    var data = req.body;

    multimedia.update(data, {
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
        multimedia.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        multimedia.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

ex.Xarea = function(req, res, next) {

    var id = req.params.id;

    multimedia.findAll({
        where: {
            id_area : id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });
};
