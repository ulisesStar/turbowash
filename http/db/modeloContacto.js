var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Contacto = sequelize.define('contacto', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        email: Sequelize.STRING,
        mensaje: Sequelize.TEXT,
        telefono :Sequelize.STRING

    })

    return Contacto;
};

module.exports = ex;
