var express = require('express');
var routeContacto = express.Router();

var x = require("../controllers/controllerContacto");

routeContacto.route('/data/contacto')
        .get(x.read)
        .post(x.create);

routeContacto.route('/data/contacto/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeContacto;
