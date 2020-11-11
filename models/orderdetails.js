/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('orderdetails', {
        orderNumber: {
            type: "",
            allowNull: true
        },
        productCode: {
            type: "",
            allowNull: true
        },
        quantityOrdered: {
            type: "",
            allowNull: true
        },
        priceEach: {
            type: "",
            allowNull: true
        },
        orderLineNumber: {
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
        tableName: 'orderdetails',
        timestamps: false
    });
};