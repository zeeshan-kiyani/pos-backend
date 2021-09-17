const Sequelize = require('sequelize');
const db = require('../../database/msSqlSequelize')

//get all users 
exports.getInventory = () => {
    return db.sequelize.query('select *from inventory',{ type: Sequelize.QueryTypes.SELECT
    });
}
exports.addInventory = (inventoryObj) => {
    return db.sequelize.query(`insert into pos_backend.dbo.inventory('product_name','quantity','product_status','price','created_at') VALUES
    ('${inventoryObj.product_name}','${inventoryObj.quantity}','${inventoryObj.product_status}','${inventoryObj.price}','${inventoryObj.created_at}')`);
}