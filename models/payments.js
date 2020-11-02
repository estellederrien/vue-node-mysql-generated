const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    customerNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "customerNumber",
      references: {
        key: "customerNumber",
        model: "customers_model"
      }
    },
    checkNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "checkNumber"
    },
    paymentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "paymentDate"
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "amount"
    }
  };
  const options = {
    tableName: "payments",
    comment: "",
    indexes: []
  };
  const PaymentsModel = sequelize.define("payments_model", attributes, options);
  return PaymentsModel;
};