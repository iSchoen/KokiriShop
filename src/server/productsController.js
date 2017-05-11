const app = require("../../server.js");
const db = app.get("db");

module.exports = {
    getAllProducts: (request, response, next) => {
        db.getAllProducts((error, sqlResponse) => {
            if(!error) {
                response.status(200).send(sqlResponse);
            } else {
                response.status(404).send("Could not retrieve products");
            }
        });
    },
    addProduct: (request, response, next) => {
        db.addProduct([request.body.product_name, request.body.product_price, request.body.product_description, request.body.image_url], (error, sqlResponse) => {
            if(!error) {
                response.status(200).send(sqlResponse);
                console.log("Item was added!");
            } else {
                response.status(500).send("Could not add product");
            }
        });
    },
    deleteProduct: (request, response, next) => {
        db.deleteProduct([request.body.product_name], (error, sqlResponse) => {
            if(!error) {
                response.status(200).send(sqlResponse);
            } else {
                response.status(404).send("Could not delete product")
            }
        });
    },
    updateProduct: (request, response, next) => {
        db.updateProduct([request.body.id, request.body.product_name, request.body.product_price, request.body.product_description, request.body.image_url], 
        (error, sqlResponse) => {
            if(!error) {
                response.status(200).send(sqlResponse);
            } else {
                response.status(404).send("Could not update product");
            }
        });
    },
    subscribeToMailingList: (request, response, next) => {
        db.subscribeToMailingList([request.body.email, request.body.first_name, request.body.last_name, request.body.type], 
        function(error, sqlResponse){
            if(!error) {
                response.status(200).send(sqlResponse);
            } else {
                response.status(500).send("Could not add to mailing list");
            }
        });
    }
}