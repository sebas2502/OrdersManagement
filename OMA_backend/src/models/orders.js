const { DataTypes } = require('sequelize');
const connection = require('../../config/db');

const Order = connection.define('Order',{
    id_order : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    description : { type : DataTypes.TEXT , allowNull : false},
    id_customer : { type : DataTypes.INTEGER , allowNull : false},
    id_seller : { type : DataTypes.INTEGER , allowNull : false},
    state : { type : DataTypes.STRING , allowNull : true},
    
        
},  {
        tableName : 'orders',
        timestamps : true,
        createdAt : 'created_at',
        updatedAt : false
    });

module.exports = Order;