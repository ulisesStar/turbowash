var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Multimedia = sequelize.define('multimedia', {
    	id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        imagen: {
                type: Sequelize.BLOB('medium'),
                get() {
                    var imagenBin = this.getDataValue('imagen');
                    var Imagenes = new Buffer(imagenBin).toString('ascii');
                    return Imagenes
                },
            },
        vimeo: Sequelize.INTEGER
    })

    return Multimedia;
};

module.exports = ex;
