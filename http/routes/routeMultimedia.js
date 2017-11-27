var express = require('express');
var routeMultimedia = express.Router();

var x = require("../controllers/controllerMultimedia");

routeMultimedia.route('/data/multimedia')
        .get(x.read)
        .post(x.create);

routeMultimedia.route('/data/multimedia/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

routeMultimedia.route('/data/multimedia/Xarea/:id')
        .get(x.Xarea);

module.exports = routeMultimedia;
