/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('products', {
        productCode: {
            type: "",
            allowNull: true
        },
        productName: {
            type: "",
            allowNull: true
        },
        productLine: {
            type: "",
            allowNull: true
        },
        productScale: {
            type: "",
            allowNull: true
        },
        productVendor: {
            type: "",
            allowNull: true
        },
        productDescription: {
            type: "",
            allowNull: true
        },
        quantityInStock: {
            type: "",
            allowNull: true
        },
        buyPrice: {
            type: "",
            allowNull: true
        },
        MSRP: {
            type: "",
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'products',
        timestamps: false
    });
};