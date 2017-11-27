var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Promociones = sequelize.define('promociones', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
		imagen: {
			type: Sequelize.BLOB('medium'),
			get() {
				var imagenBin = this.getDataValue('imagen');
				var Imagenes = new Buffer(imagenBin).toString('ascii');
				return Imagenes
			},
		},
        tipo: Sequelize.STRING

    })

    return Promociones;
};

module.exports = ex;
