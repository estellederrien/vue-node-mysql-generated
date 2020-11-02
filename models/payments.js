/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    customerNumber: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'customers',
        key: 'customerNumber'
      }
    },
    checkNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "customerNumber" },
          { name: "checkNumber" },
        ]
      },
    ]
  });
};
