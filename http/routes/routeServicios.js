var express = require('express');
var routeServicios = express.Router();

var x = require("../controllers/controllerServicios");

routeServicios.route('/data/servicios')
        .get(x.read)
        .post(x.create);

routeServicios.route('/data/servicios/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeServicios;
