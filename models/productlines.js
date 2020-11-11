/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productlines', {
    productLine: {
      type: "",
      allowNull: true
    },
    textDescription: {
      type: "",
      allowNull: true
    },
    htmlDescription: {
      type: "",
      allowNull: true
    },
    image: {
      type: "",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productlines',
    timestamps: false
  });
};
