/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('offices', {
        officeCode: {
            type: "",
            allowNull: true
        },
        city: {
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
        state: {
            type: "",
            allowNull: true
        },
        country: {
            type: "",
            allowNull: true
        },
        postalCode: {
            type: "",
            allowNull: true
        },
        territory: {
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
        tableName: 'offices',
        timestamps: false
    });
};