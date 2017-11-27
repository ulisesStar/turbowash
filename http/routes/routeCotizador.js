var express = require('express');
var routeCotizador = express.Router();

var x = require("../controllers/controllerCotizador");

routeCotizador.route('/data/cotizador')
        .get(x.read)
        .post(x.create);

routeCotizador.route('/data/cotizador/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeCotizador;
