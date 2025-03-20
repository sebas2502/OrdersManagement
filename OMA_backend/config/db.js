const {Sequelize} = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(process.env.DATABASE , process.env.USER , process.env.PASSWORD , {host : process.env.HOST , dialect : process.env.DIALECT})


const connected = async  () => {
    try {
        await connection.authenticate();
        console.log('¡Connected to database...!');
    } catch (error) {
        console.error('¡Error in the connected to database...!', error);
    }
}

connected();


module.exports = connection;    