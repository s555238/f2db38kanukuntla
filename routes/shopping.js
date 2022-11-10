
var express = require('express'); 
const  shopping_controlers= require('../controllers/shopping'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', shopping_controlers.shopping_view_all_Page ); 
module.exports = router; 
module.exports = router;