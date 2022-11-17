var shopping = require('../models/shopping'); 
 

   // List of all shoppings 
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
exports.shopping_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await shopping.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.shopping_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await shopping.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.shopping_type)  
               toUpdate.shopping_type = req.body.shopping_type; 
        if(req.body.size) toUpdate.size = req.body.size;
        if(req.body.cost) toUpdate.cost = req.body.cost;  
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle shopping delete on DELETE. 
exports.shopping_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await shopping.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.shopping_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await shopping.findById( req.query.id) 
        res.render('shoppingdetail',  
{ title: 'Shopping Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a shopping. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.shopping_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('shoppingcreate', { title: 'Shopping Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a shopping. 
// query provides the id 
exports.shopping_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await shopping.findById(req.query.id) 
        res.render('shoppingupdate', { title: 'shopping Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.shopping_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await shopping.findById(req.query.id) 
        res.render('shoppingdelete', { title: 'Shopping Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 