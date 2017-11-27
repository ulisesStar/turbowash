var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Sucursal = sequelize.define('sucursal', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        direccion: Sequelize.STRING,
        telefono: Sequelize.STRING

    })

    return Sucursal;
};

module.exports = ex;
