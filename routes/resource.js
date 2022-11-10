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
 
module.exports = router; 
 