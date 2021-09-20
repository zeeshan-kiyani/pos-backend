const Sequelize = require('sequelize');
const db = require('../../database/msSqlSequelize')

//get all users 
exports.getTotalSale = (date) => {
    return db.sequelize.query(`select sum(total_price) as total_sale from [dbo].[sale] where [created_date] = '${date}' `,{ type: Sequelize.QueryTypes.SELECT
    });
}
const saveSaleInventory = (inventoryObj) => {
     db.sequelize.query(`insert into dbo.sale([product_id],[product_name], [total_quantity], [total_price],[created_date]) VALUES
    ('${inventoryObj.product_id}','${inventoryObj.product_name}','${inventoryObj.total_quantity}','${inventoryObj.total_price}','${inventoryObj.created_date}')`)
}
exports.addSaleItems = (saleItemObj) => {
    // console.log(saleItemObj)
    let promiseArray = []
    saleItemObj.map((inventoryObj) => {
         promiseArray.push(saveSaleInventory(inventoryObj))
    })
    return Promise.all(promiseArray)
}
exports.searchProduct = (product_name) => {
    return db.sequelize.query(`select *from [dbo].[sale] where [product_name] like '%${product_name}%' `,{ type: Sequelize.QueryTypes.SELECT
    });
}

