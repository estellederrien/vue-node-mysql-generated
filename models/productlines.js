/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productlines', {
    productLine: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    textDescription: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    htmlDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: "MEDIUMBLOB",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productlines',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "productLine" },
        ]
      },
    ]
  });
};
