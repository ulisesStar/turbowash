var ex = function(conector) {

    var Sequelize = conector.Sequelize;
    var sequelize = conector.sequelize;

    var Areas = sequelize.define('areas', {
        id:{ type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
        nombre: Sequelize.STRING,
        descripcion: Sequelize.TEXT,
        video: Sequelize.STRING,
		frame: Sequelize.STRING
    })

    return Areas;
};

module.exports = ex;
