/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    employeeNumber: {
      type: "",
      allowNull: true
    },
    lastName: {
      type: "",
      allowNull: true
    },
    firstName: {
      type: "",
      allowNull: true
    },
    extension: {
      type: "",
      allowNull: true
    },
    email: {
      type: "",
      allowNull: true
    },
    officeCode: {
      type: "",
      allowNull: true
    },
    reportsTo: {
      type: "",
      allowNull: true
    },
    jobTitle: {
      type: "",
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      unique: true
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "sqlite_autoindex_employees_1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
