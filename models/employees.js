const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    employeeNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "employeeNumber"
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastName"
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstName"
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "extension"
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    officeCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "officeCode",
      references: {
        key: "officeCode",
        model: "offices_model"
      }
    },
    reportsTo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "reportsTo",
      references: {
        key: "employeeNumber",
        model: "employees_model"
      }
    },
    jobTitle: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "jobTitle"
    }
  };
  const options = {
    tableName: "employees",
    comment: "",
    indexes: [{
      name: "reportsTo",
      unique: false,
      type: "BTREE",
      fields: ["reportsTo"]
    }, {
      name: "officeCode",
      unique: false,
      type: "BTREE",
      fields: ["officeCode"]
    }]
  };
  const EmployeesModel = sequelize.define("employees_model", attributes, options);
  return EmployeesModel;
};