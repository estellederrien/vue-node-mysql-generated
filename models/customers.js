/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('customers', {
        customerNumber: {
            type: "",
            allowNull: true
        },
        customerName: {
            type: "",
            allowNull: true
        },
        contactLastName: {
            type: "",
            allowNull: true
        },
        contactFirstName: {
            type: "",
            allowNull: true
        },
        phone: {
            type: "",
            allowNull: true
        },
        addressLine1: {
            type: "",
            allowNull: true
        },
        addressLine2: {
            type: "",
            allowNull: true
        },
        city: {
            type: "",
            allowNull: true
        },
        state: {
            type: "",
            allowNull: true
        },
        postalCode: {
            type: "",
            allowNull: true
        },
        country: {
            type: "",
            allowNull: true
        },
        salesRepEmployeeNumber: {
            type: "",
            allowNull: true
        },
        creditLimit: {
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
        tableName: 'customers',
        timestamps: false
    });
};