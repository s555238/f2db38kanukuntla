var shopping = require('../models/shopping'); 
 

   // List of all Costumes 
exports.shopping_list = async function(req, res) { 
    try{ 
        theshopping = await shopping.find(); 
        res.send(theshopping); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 


 
// for a specific shopping. 
exports.shopping_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: shopping detail: ' + req.params.id); 
}; 
 
// Handle shopping create on POST. 
exports.shopping_create_post = async function (req, res) {
    console.log(req.body)
    let document = new shopping();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.shopping_type = req.body.shopping_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Handle shopping delete form on DELETE. 
exports.shopping_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: shopping delete DELETE ' + req.params.id); 
}; 
 
// Handle shopping update form on PUT. 
exports.shopping_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: shopping update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.shopping_view_all_Page = async function(req, res) { 
    try{ 
        theshopping = await shopping.find(); 
        res.render('shopping', { title: 'shopping Search Results', results: theshopping}); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 