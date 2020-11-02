var DataTypes = require("sequelize").DataTypes;
var _customers = require("./customers");
var _orders = require("./orders");
var _employees = require("./employees");
var _orderdetails = require("./orderdetails");
var _offices = require("./offices");
var _payments = require("./payments");
var _products = require("./products");
var _productlines = require("./productlines");

function initModels(sequelize) {
    var customers = _customers(sequelize, DataTypes);
    var orders = _orders(sequelize, DataTypes);
    var employees = _employees(sequelize, DataTypes);
    var orderdetails = _orderdetails(sequelize, DataTypes);
    var offices = _offices(sequelize, DataTypes);
    var payments = _payments(sequelize, DataTypes);
    var products = _products(sequelize, DataTypes);
    var productlines = _productlines(sequelize, DataTypes);

    return {
        customers,
        orders,
        employees,
        orderdetails,
        offices,
        payments,
        products,
        productlines,
    };
}
module.exports = { initModels };