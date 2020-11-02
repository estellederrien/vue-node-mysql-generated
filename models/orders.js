/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    orderNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    requiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    shippedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customerNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'customers',
        key: 'customerNumber'
      },
      unique: "orders_ibfk_1"
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderNumber" },
        ]
      },
      {
        name: "customerNumber",
        using: "BTREE",
        fields: [
          { name: "customerNumber" },
        ]
      },
    ]
  });
};
