const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    orderNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "orderNumber",
      references: {
        key: "orderNumber",
        model: "orders_model"
      }
    },
    productCode: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "productCode",
      references: {
        key: "productCode",
        model: "products_model"
      }
    },
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantityOrdered"
    },
    priceEach: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "priceEach"
    },
    orderLineNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderLineNumber"
    }
  };
  const options = {
    tableName: "orderdetails",
    comment: "",
    indexes: [{
      name: "productCode",
      unique: false,
      type: "BTREE",
      fields: ["productCode"]
    }]
  };
  const OrderdetailsModel = sequelize.define("orderdetails_model", attributes, options);
  return OrderdetailsModel;
};