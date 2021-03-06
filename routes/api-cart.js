const router=require ('express-promise-router')();
const sqlSequelize = require('../services/cart/cart-service');

const getTotalSale = ( req, res ) => {
    const date = req.body.date;
    return sqlSequelize.getTotalSale(date).then((row) => {
        return res.status(200).json(row);
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}
const addSaleItems = (req,res) => {
    const saleItems = req.body.saleItems;
    // console.log(saleItems)
    return sqlSequelize.addSaleItems(saleItems).then((row) => {
        console.log(row)
        return res.status(200).json({msg:'Inventory added successfully'});
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}
const searchProduct = ( req, res ) => {
    const product_name = req.params.product_name
    return sqlSequelize.searchProduct(product_name).then((row) => {
        return res.status(200).json(row);
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}
router.post('/getTotalSale', getTotalSale);
router.post('/addSaleItems', addSaleItems);
router.get('/searchProduct/:product_name', searchProduct);

// router.put('/updateInventory/:id', updateInventory);
// router.delete('/deleteInventory/:id', deleteInventory);
module.exports = router;
