var inquirer = require("inquirer");
var mysql = require("mysql");
const table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_db",
});

connection.connect(function(err){
    if (err) throw err;
    inventory();
});

productsArr = [];

function inventory(){
    connection.query("SELECT * FROM products", function(err, res){
        if (err) throw err;

        else {
            for (let i = 0; i <res.length; i++){
                productsArr.push({
                    id: res[i].id,
                    product: res[i].product_name,
                    department: res[i].department_name,
                    price: res[i].price,
                    quantity: res[i].stock_quantity
                });
            }
        }
        console.table(productsArr);
        console.log("\n==============================\n");
    })
    shop();
}

function shop(){
    inquirer.prompt([
        {
            name: "product",
            message:"Enter the id of the product you would like to purchase.",
            type: "input",
        },
        {
            name: "numberBought",
            message: "How many would you like to buy?",
            type: "input",
        }
    ]).then(function(answer){
        var selectedItem = parseInt(answer.product);
        var requestedAmount = parseInt(answer.numberBought);
        
        connection.query("SELECT * FROM products WHERE ?", {product: selectedItem}, function(err, res){
            if (err) throw err;
            if (res.length === 0 || res.length > 10){
                console.log("Pick an item that actually exists.");
                shop();
            }else{
                if (requestedAmount <= product.stock_quantity){
                    console.log("Sure thing! Your order has been placed.");

                    var changeStock = "UPDATE products SET stock_quantity = " + (product.stock_quantity - requestedAmount) + " WHERE id = " + selectedItem;

                    connection.query(changeStock, function(err, res){
                        if (err) throw err;
                        console.log("Your total is $" + product.price * requestedAmount);
                        connection.end();
                    })
                }else{
                    console.log("We don't have that much of that product. I apologize.");
                    shop();
                    connection.end();
                }
            }
        })
    })
    
}

