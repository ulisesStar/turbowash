var db = require('../relations');
var paquetes = db.paquetes;
var items = db.items;

var ex = module.exports = {};

ex.create = function(req, res, next) {

    var data = req.body;
    console.log(data);

    paquetes.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });

};

ex.delete = function(req, res, next) {

    var id = req.params.id;

    paquetes.findById(id).then(function(paquetes) {
        paquetes.destroy().then(function(result) {
            res.status(200).jsonp(result);
        });
    });

};

ex.update = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    paquetes.update(data, {
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
        paquetes.findById(id).then(function(result) {
            res.status(200).jsonp(result);
        });
    } else {
        paquetes.findAll().then(function(result) {
            res.status(200).jsonp(result);
        });
    }
};

//Codigo para post
ex.crearitems = function(req, res, next) {

    var data = req.body;
    console.log(data);

    items.create(data).then(function(result) {
        res.status(200).jsonp(result);
    });


};


ex.editaritems = function(req, res, next) {

    var id = req.params.id;
    var data = req.body;

    items.update(data, {
        where: {
            id: id
        }
    }).then(function(result) {
        res.status(200).jsonp(result);
    });

};


ex.paqueteXarea = function(req, res, next) {

    var id = req.params.id;

    paquetes.findAll({
        where : {
            id_area: id
        },
        include : [
            {model: items}
        ]
    }).then(function(result) {
        res.status(200).jsonp(result);
    });



};
