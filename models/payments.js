/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    customerNumber: {
      type: "",
      allowNull: true
    },
    checkNumber: {
      type: "",
      allowNull: true
    },
    paymentDate: {
      type: "",
      allowNull: true
    },
    amount: {
      type: "",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payments',
    timestamps: false
  });
};
