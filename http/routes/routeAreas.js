var express = require('express');
var routeAreas = express.Router();

var x = require("../controllers/controllerAreas");

routeAreas.route('/data/areas')
        .get(x.read)
        .post(x.create);

routeAreas.route('/data/areas/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeAreas;
