var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Paquetes = sequelize.define('paquetes', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        precio: Sequelize.FLOAT
    })

    return Paquetes;
};

module.exports = ex;
