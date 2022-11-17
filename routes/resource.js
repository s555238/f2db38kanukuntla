var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var shopping_controller = require('../controllers/shopping'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// shopping ROUTES /// 
 
// POST request for creating a shopping.  
router.post('/shopping', shopping_controller.shopping_create_post); 
 
// DELETE request to delete shopping. 
router.delete('/shopping/:id', shopping_controller.shopping_delete); 
 
// PUT request to update shopping. 
router.put('/shopping/:id', shopping_controller.shopping_update_put); 
 
// GET request for one shopping. 
router.get('/shopping/:id', shopping_controller.shopping_detail); 
 
// GET request for list of all shopping items. 
router.get('/shopping', shopping_controller.shopping_list); 

//GET detail costume page */ 
router.get('/detail', shopping_controller.shopping_view_one_Page); 

/* GET create costume page */ 
router.get('/create', shopping_controller.shopping_create_Page); 

/* GET create update page */ 
router.get('/update', shopping_controller.shopping_update_Page); 

/* GET delete costume page */ 
router.get('/delete', shopping_controller.shopping_delete_Page); 
 
module.exports = router; 
 