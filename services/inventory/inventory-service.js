const Sequelize = require('sequelize');
const db = require('../../database/msSqlSequelize')

//get all users 
exports.getInventory = () => {
    return db.sequelize.query('select *from inventory',{ type: Sequelize.QueryTypes.SELECT
    });
}