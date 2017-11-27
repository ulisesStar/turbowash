var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');

//- Rutas

var routes = require('./http/routes');
var routeUsuario = require('./http/routes/routeUsuario');
var routeAreas = require('./http/routes/routeAreas');
var routeContacto = require('./http/routes/routeContacto');
var routeCotizador = require('./http/routes/routeCotizador');
var routeHerramientas = require('./http/routes/routeHerramientas');
//var routeImagenes = require('./http/routes/routeImagenes');
var routeLlantas = require('./http/routes/routeLlantas');
var routePaquetes = require('./http/routes/routePaquetes');
var routePromociones = require('./http/routes/routePromociones');
var routeSucursal = require('./http/routes/routeSucursal');
var routeMultimedia = require('./http/routes/routeMultimedia');
var routeServicios = require('./http/routes/routeServicios');
var routeInfo = require('./http/routes/routeInfo');
var routePortada = require('./http/routes/routePortada');
var routeMail = require('./http/routes/routeMail');

// - Conexion a la base de datos

var con = require('./http/connection');

// require('./conf/auth')(app);

// - Middlewares

var lessMiddleware = require('less-middleware')

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "jade");

app.use(favicon(path.join(__dirname, 'assets', 'favicon.ico')))
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(flash());

app.use(session({secret: '01f4845/564564/6@@fas588--[[}++', resave: true, saveUninitialized: true}));

app.use(passport.initialize());
app.use(passport.session());

morgan('combined', {skip: function (req, res) { return res.statusCode < 400 }});

app.use('/', routes);
app.use('/', routeUsuario);
app.use('/', routeAreas);
app.use('/', routeContacto);
app.use('/', routeCotizador);
app.use('/', routeHerramientas);
//app.use('/', routeImagenes);
app.use('/', routeLlantas);
app.use('/', routePaquetes);
app.use('/', routePromociones);
app.use('/', routeSucursal);
app.use('/', routeMultimedia);
app.use('/', routeServicios);
app.use('/', routeInfo);
app.use('/', routePortada);
app.use('/', routeMail);

app.use(lessMiddleware(__dirname + '/assets'));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'http')));

module.exports = app;
