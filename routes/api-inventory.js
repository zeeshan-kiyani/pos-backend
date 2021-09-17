const router=require ('express-promise-router')();
const sqlSequelize = require('../services/inventory/inventory-service');
const getInventory=( req, res ) => {
    return sqlSequelize.getInventory().then((row) => {
        return res.status(200).json(row);
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}
const addInventory = (req,res) => {
    const {body} = req;
    const product_name = body.product_name;
    const quantity = body.quantity;
    const price = body.price;
    body.created_at = ''
    return sqlSequelize.addInventory(body).then((row) => {
        return res.status(200).json(row);
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}

router.get('/getInventory', getInventory)
router.post('/addInventory', addInventory)
// router.get('/updateInventory', getInventory)
// router.get('/deleteInventory', getInventory)
// router.get('/searchInventory', getInventory)
module.exports = router;
