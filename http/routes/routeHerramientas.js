var express = require('express');
var routeHerramientas = express.Router();

var x = require("../controllers/controllerHerramientas");

routeHerramientas.route('/data/herramientas')
        .get(x.read)
        .post(x.create);

routeHerramientas.route('/data/herramientas/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeHerramientas;
