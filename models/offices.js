/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offices', {
    officeCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressLine1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    addressLine2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postalCode: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    territory: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'offices',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "officeCode" },
        ]
      },
    ]
  });
};
