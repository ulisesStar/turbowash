var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Llantas = sequelize.define('llantas', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        marca: Sequelize.STRING,
        descripcion :Sequelize.TEXT,
        tipo: Sequelize.STRING,
        imagen_url: Sequelize.STRING,
        imagen: {
            type: Sequelize.BLOB('medium'),
            get() {
                var imagenBin = this.getDataValue('imagen');
                var Imagenes = new Buffer(imagenBin).toString('ascii');
                return Imagenes
            },
        }
    })

    return Llantas;
};

module.exports = ex;
