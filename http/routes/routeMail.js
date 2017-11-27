var express = require('express');
var routeMails = express.Router();

var x = require("../controllers/controllerMails");

routeMails.route('/data/mail')
        .get(x.mail);

module.exports = routeMails;
