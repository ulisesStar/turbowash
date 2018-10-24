var mysql = require('mysql');
var Sequelize = require('sequelize');

var sequelize = new Sequelize('turbowash', 'root', '1234', {
    host: '104.197.181.104',
    dialect: 'mysql',
    port: '3306',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// sequelize.sync()
//     .then(function() {
//         console.log('Connecion realizada');
//     })
//     .catch(function(err) {
//         console.log('No se puede conectar a la bd:', err);
//     }
// );

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

//mysql://b517c855b82718:e0b5edc4@us-cdbr-iron-east-05.cleardb.net/heroku_ccd14e3e2f42922?reconnect=true
