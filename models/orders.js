/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderNumber: {
      type: "",
      allowNull: true
    },
    orderDate: {
      type: "",
      allowNull: true
    },
    requiredDate: {
      type: "",
      allowNull: true
    },
    shippedDate: {
      type: "",
      allowNull: true
    },
    status: {
      type: "",
      allowNull: true
    },
    comments: {
      type: "",
      allowNull: true
    },
    customerNumber: {
      type: "",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false
  });
};
