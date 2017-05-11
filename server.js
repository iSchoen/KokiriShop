const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const Vue = require('vue');
Vue.use(require('vue-resource'));

var app = module.exports = express();
app.use(express.static(__dirname));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const connection = massive.connectSync({
    connectionString: "postgres://mifgwfiv:zH5PjNhIXDQ53a2qEYV54hFEp5I_wBId@stampy.db.elephantsql.com:5432/mifgwfiv"
});

app.set("db", connection);
const db = app.get("db");

const productsController = require("./src/server/productsController");

const port = 3434;

app.use(bodyParser.json());

app.get("/products", productsController.getAllProducts);
app.post("/products", productsController.addProduct);
app.put("/products", productsController.updateProduct);
app.delete("/products", productsController.deleteProduct);
app.post("/mailing_list", productsController.subscribeToMailingList);

app.listen(port, () => {
    console.log("Listening on port", port);
});