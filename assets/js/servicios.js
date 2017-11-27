app.service('Usuario', function() {

    this.obtener = function(id) {return axios('/data/usuario/' + id)}

});
app.service('Llantas', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/llantas')}
    this.crear = function(llanta) {return axios.post('/data/llantas', llanta)}
    this.editar = function(llanta) {return axios.put('/data/llantas/' + llanta.id, llanta)}
    this.eliminar = function(id) {return axios.delete('/data/llantas/' + id)}
});

app.service('Areas', function($http, alertas, $q) {

    this.obtener = function() {return axios('/data/areas')}
    this.one = function(id) {return axios('/data/areas/' + id)}
    this.crear = function(area) {return axios.post('/data/areas/', area)}
    this.editar = function(area) {return axios.put('/data/areas/' + area.id, area)}
    this.eliminar = function(id) {return axios.delete('/data/areas/' + id)}

    this.servicios = function(id) {return axios('/data/infoXareas/' + id)}

    this.crearInfo = function(info) {return axios.post('/data/info/' + info)}
    this.editarInfo = function(info) {return axios.put('/data/info/' + info.id, info)}
    this.servicios2 = function(servicios) {return axios('/data/servicios')}
    this.paquetes = function(paquetes) {return axios('/data/paquetes')}
    this.herramientas = function(herramientas) {return axios('/data/herramientas')}
});

app.service('Portada', function($http, alertas, $q) {

    this.obtener = function() {return axios('/data/portada')}
    this.crear = function(portada) {return axios.post('/data/portada', portada)}
    this.editar = function(portada) {return axios.put('/data/portada/' + portada.id, portada)}
    this.eliminar = function(id) {return axios.delete('/data/portada/' + id)}

    this.Xarea = function(id) {return axios('/data/portada/Xarea/' + id)}

});

app.service('Multimedia', function($http, alertas, $q) {

    this.obtener = function() {return axios('/data/multimedia')}
    this.crear = function(multimedia) {return axios.post('/data/multimedia', multimedia)}
    this.editar = function(multimedia) {return axios.put('/data/multimedia/' + multimedia.id, multimedia)}
    this.eliminar = function(id) {return axios.delete('/data/multimedia/' + id)}
    this.Xarea = function(id) {return axios('/data/multimedia/Xarea/' + id)}

});

app.service('Sucursal', function($http, alertas, $q) {

    this.obtener = function() {return axios('/data/sucursal')}
    this.crear = function(sucursal) {return axios.post('/data/sucursal/', sucursal)}
    this.editar = function(sucursal) {return axios.put('/data/sucursal/' + sucursal.id, sucursal)}
    this.eliminar = function(id) {return axios.delete('/data/sucursal/' + id)}

});

app.service('Promociones', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/promo')}
	this.one = function(id) {return axios('/data/promo/' + id)}
    this.crear = function(promo) {return axios.post('/data/promo', promo)}
    this.editar = function(promo) {return axios.put('/data/promo/' + promo.id, promo)}
    this.eliminar = function(id) {return axios.delete('/data/promo/' + id)}
});

app.service('Llantas', function($http, alertas, $q) {

    this.obtener = function() {return axios('/data/llantas')}
    this.one = function(id) {return axios('/data/llantas/' + id)}
    this.crear = function(llantas) {return axios.post('/data/llantas', llantas)}
    this.editar = function(llantas) {return axios.put('/data/llantas/' + llantas.id, llantas)}
    this.eliminar = function(id) {return axios.delete('/data/llantas/' + id)}

});

app.service('Herramientas', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/herramientas')}
    this.crear = function(herramientas) {return axios.post('/data/herramientas', herramientas)}
    this.editar = function(herramientas) {return axios.put('/data/herramientas/' + herramientas.id, herramientas)}
});

app.service('Paquetes', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/paquetes')}
    this.crear = function(paquetes) {return axios.post('/data/paquetes', paquetes)}
    this.editar = function(paquetes) {return axios.put('/data/paquetes/' + paquetes.id, paquetes)}

    this.crearItem = function(item) {return axios.post('/data/itemsPaquetes', item)}
    this.editarItem = function(item) {return axios.put('/data/itemsPaquetes/' + item.id, item)}
    this.paqueteXarea = function(id) {return axios('/data/paqueteXarea/' + id)}
});

app.service('Servicios', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/servicios')}
    this.crear = function(servicio) {return axios.post('/data/servicios', servicio)}
    this.editar = function(servicio) {return axios.put('/data/servicios/' +  servicio.id, servicio)}

});

app.service('Contacto', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/contacto')}
    this.one = function(id) {return axios('/data/contacto/' + id)}
    this.crear = function(contacto) {return axios.post('/data/contacto', contacto)}
});

app.service('Cotizador', function($http, alertas, $q) {
    this.obtener = function() {return axios('/data/cotizador')}
    this.one = function(id) {return axios('/data/cotizador/' + id)}
    this.crear = function(cotizacion) {return axios.post('/data/cotizador', cotizacion)}
});
