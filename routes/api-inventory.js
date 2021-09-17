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
    return sqlSequelize.addInventory(body).then((row) => {
        return res.status(200).json({msg:'Inventory added successfully'});
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}
const updateInventory = (req,res) => {
    const id = req.params.id;
    const { body } = req;
    body.created_at = new Date()
    return sqlSequelize.updateInventory(id,body).then((row) => {
        return res.status(200).json({msg:'Inventory updated successfully'});
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}

const deleteInventory=( req, res ) => {
    const id = req.params.id;
    return sqlSequelize.deleteInventory(id).then((row) => {
        return res.status(200).json({msg:'inventory deleted succesfully'});
     }).catch(error =>{
         return res.status(500,{error});
     }); 
}

router.get('/getInventory', getInventory);
router.post('/addInventory', addInventory);
router.put('/updateInventory/:id', updateInventory);
router.delete('/deleteInventory/:id', deleteInventory);
module.exports = router;
