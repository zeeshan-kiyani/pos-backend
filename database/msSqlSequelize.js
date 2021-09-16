const config = require('config');
const Sequelize = require('sequelize');
const db = {};
//for mysql configuration
// const sequelize = new Sequelize(config.db.poolMySql.database,config.db.poolMySql.user, config.db.poolMySql.password, {
//     host: config.db.poolMySql.host,
//     dialect: config.db.dialect,
//     pool: config.db.poolSequelize,
//     dialectOptions: { 
//         encrypt: false 
//     } 
//   });
 //for MSsql configuration 
const sequelize = new Sequelize('pos_backend','sa', 'reallyStrongPwd123', {
    host: 'localhost',
    dialect: 'mssql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    dialectOptions: {
        encrypt: false ,
        options: {
          useUTC: false, // for reading from database
          requestTimeout: 90000
        },
    },
    // logging: console.log,
    // logging: function (str) {
      // console.log(str)
        // do your own logging
    // }
  });
db.sequelize = sequelize;
db.Sequelize = Sequelize;
//exporting db instance
module.exports = db;
  