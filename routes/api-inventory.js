const router=require ('express-promise-router')();
const sqlSequelize = require('../services/inventory/inventory-service');
const getInventory=( req, res ) => {
    return sqlSequelize.getInventory().then((row) => {
        return res.status(200).json(row);
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}

router.get('/getInventory', getInventory)
module.exports = router;
