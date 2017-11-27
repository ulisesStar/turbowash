var express = require('express');
var routePromociones = express.Router();

var x = require("../controllers/controllerPromociones");

routePromociones.route('/data/promo')
        .get(x.read)
        .post(x.create);

routePromociones.route('/data/promo/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routePromociones;
