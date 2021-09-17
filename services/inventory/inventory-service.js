const Sequelize = require('sequelize');
const db = require('../../database/msSqlSequelize')

//get all users 
exports.getInventory = () => {
    return db.sequelize.query('select *from inventory',{ type: Sequelize.QueryTypes.SELECT
    });
}
exports.addInventory = (inventoryObj) => {
    return db.sequelize.query(`insert into dbo.inventory([product_name], [qantity], [price], [created_date]) VALUES
    ('${inventoryObj.product_name}','${inventoryObj.quantity}','${inventoryObj.price}','${inventoryObj.created_date}')`)
}

exports.updateInventory = (id, inventoryObj) => {
    return db.sequelize.query(`update dbo.inventory set 
    [product_name] = '${inventoryObj.product_name}', 
    [qantity] = '${inventoryObj.quantity}',
    [product_status] = '${inventoryObj.product_status}', 
    [price] = '${inventoryObj.price}',
    [updated_date] = '${inventoryObj.updated_date}'
    where id=${id}`)
}
exports.deleteInventory = (id) => {
    return db.sequelize.query(`Delete from inventory where id=${id}`)
}

