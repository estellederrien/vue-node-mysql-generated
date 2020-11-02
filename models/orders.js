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
      field: "orderNumber"
    },
    orderDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orderDate"
    },
    requiredDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "requiredDate"
    },
    shippedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "shippedDate"
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "status"
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "comments"
    },
    customerNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "customerNumber",
      references: {
        key: "customerNumber",
        model: "customers_model"
      }
    }
  };
  const options = {
    tableName: "orders",
    comment: "",
    indexes: [{
      name: "customerNumber",
      unique: false,
      type: "BTREE",
      fields: ["customerNumber"]
    }]
  };
  const OrdersModel = sequelize.define("orders_model", attributes, options);
  return OrdersModel;
};