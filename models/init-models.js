var DataTypes = require("sequelize").DataTypes;
var _orders = require("./orders");
var _offices = require("./offices");
var _productlines = require("./productlines");
var _orderdetails = require("./orderdetails");
var _customers = require("./customers");
var _products = require("./products");
var _payments = require("./payments");
var _employees = require("./employees");

function initModels(sequelize) {
  var orders = _orders(sequelize, DataTypes);
  var offices = _offices(sequelize, DataTypes);
  var productlines = _productlines(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);

  return {
    orders,
    offices,
    productlines,
    orderdetails,
    customers,
    products,
    payments,
    employees,
  };
}
module.exports = { initModels };
