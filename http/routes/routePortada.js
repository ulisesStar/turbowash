var express = require('express');
var routePortada = express.Router();

var x = require("../controllers/controllerPortada");

routePortada.route('/data/portada')
        .get(x.read)
        .post(x.create);

routePortada.route('/data/portada/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routePortada.route('/data/portada/Xarea/:id')
        .get(x.Xarea);

module.exports = routePortada;
