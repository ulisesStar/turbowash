var express = require('express');
var routeInfo = express.Router();

var x = require("../controllers/controllerInfo");

routeInfo.route('/data/info')
        .get(x.read)
        .post(x.create);

routeInfo.route('/data/infoXareas/:id')
        .get(x.infoXareas);

routeInfo.route('/data/info/:id')
        .get(x.read)
        .put(x.update)
        .delete(x.delete);

module.exports = routeInfo;
