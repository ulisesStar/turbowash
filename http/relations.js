
//*-*-*-CONEXION CON SEQUELIZE & MYSQL-*-*-*-*-*-*-*
var conector = require('./connection');

//- Modelos

var usuario = require('./db/modeloUsuario')(conector);
var areas = require('./db/modeloAreas')(conector);
var contacto = require('./db/modeloContacto')(conector);
var cotizador = require('./db/modeloCotizador')(conector);
var herramientas = require('./db/modeloHerramientas')(conector);
//var imagenes = require('./db/modeloImagenes')(conector);
var llantas = require('./db/modeloLlantas')(conector);
var paquetes = require('./db/modeloPaquetes')(conector);
var promociones = require('./db/modeloPromociones')(conector);
var sucursal = require('./db/modeloSucursal')(conector);
var multimedia = require('./db/modeloMultimedia')(conector);
var servicios = require('./db/modeloServicios')(conector);
var items = require('./db/modeloItems')(conector);
var portada = require('./db/modeloPortada')(conector);

//- Relations

herramientas.belongsTo(areas, {foreignKey: 'id_areas'});
areas.hasMany(herramientas, {foreignKey: 'id_areas'});

servicios.belongsTo(areas, {foreignKey: 'id_area'});
areas.hasMany(servicios, {foreignKey: 'id_area'});

items.belongsTo(paquetes, {foreignKey: 'id_paquetes'});
paquetes.hasMany(items, {foreignKey: 'id_paquetes'});

portada.belongsTo(areas, {foreignKey: 'id_area'});
areas.hasOne(portada, {foreignKey: 'id_area'});

multimedia.belongsTo(areas, {foreignKey: 'id_area'});
areas.hasMany(multimedia, {foreignKey: 'id_area'});

paquetes.belongsTo(areas, {foreignKey: 'id_area'});
areas.hasMany(paquetes, {foreignKey: 'id_area'});

module.exports.usuario = usuario;
module.exports.areas = areas;
module.exports.contacto = contacto;
module.exports.cotizador = cotizador;
module.exports.herramientas = herramientas;
//module.exports.imagenes = imagenes;
module.exports.llantas = llantas;
module.exports.paquetes = paquetes;
module.exports.promociones = promociones;
module.exports.sucursal = sucursal;
module.exports.multimedia = multimedia;
module.exports.servicios = servicios;
module.exports.items = items;
module.exports.portada = portada;
