var express = require('express');
var routePaquetes = express.Router();

var x = require("../controllers/controllerPaquetes");

routePaquetes.route('/data/paquetes')
        .get(x.read)
        .post(x.create);

routePaquetes.route('/data/paquetes/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routePaquetes.route('/data/paqueteXarea/:id')
        .get(x.paqueteXarea);

routePaquetes.route('/data/itemsPaquetes')
        .post(x.crearitems);

routePaquetes.route('/data/itemsPaquetes/:id')
        .put(x.editaritems);

module.exports = routePaquetes;
