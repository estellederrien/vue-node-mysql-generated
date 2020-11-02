const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    productLine: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "productLine"
    },
    textDescription: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "textDescription"
    },
    htmlDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "htmlDescription"
    },
    image: {
      type: mediumblob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image"
    }
  };
  const options = {
    tableName: "productlines",
    comment: "",
    indexes: []
  };
  const ProductlinesModel = sequelize.define("productlines_model", attributes, options);
  return ProductlinesModel;
};