var express = require('express');
var routeLlantas = express.Router();

var x = require("../controllers/controllerLlantas");

routeLlantas.route('/data/llantas')
        .get(x.read)
        .post(x.create);

routeLlantas.route('/data/llantas/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeLlantas;
