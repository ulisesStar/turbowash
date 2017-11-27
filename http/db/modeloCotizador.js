var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Cotizador = sequelize.define('cotizador', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        telefono :Sequelize.STRING,
		celular : Sequelize.STRING,
        email: Sequelize.STRING,
        ancho: Sequelize.STRING,
        perfil: Sequelize.STRING,
        rin: Sequelize.STRING,
        velocidad: Sequelize.STRING,
        mensaje: Sequelize.TEXT,
        auto: Sequelize.STRING,
        marca: Sequelize.STRING

    })

    return Cotizador;
};

module.exports = ex;
