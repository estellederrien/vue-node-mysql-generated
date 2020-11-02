const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    productCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "productCode"
    },
    productName: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productName"
    },
    productLine: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productLine",
      references: {
        key: "productLine",
        model: "productlines_model"
      }
    },
    productScale: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productScale"
    },
    productVendor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productVendor"
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "productDescription"
    },
    quantityInStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantityInStock"
    },
    buyPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "buyPrice"
    },
    MSRP: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MSRP"
    }
  };
  const options = {
    tableName: "products",
    comment: "",
    indexes: [{
      name: "productLine",
      unique: false,
      type: "BTREE",
      fields: ["productLine"]
    }]
  };
  const ProductsModel = sequelize.define("products_model", attributes, options);
  return ProductsModel;
};