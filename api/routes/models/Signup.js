const Sequelize = require('sequelize');
const db = require('../config/database');

const Signups = db.define('signup', {
    number: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    username: {
        type: Sequelize.STRING
    }            
},
    {
    freezeTableName: true

});

    // Signups.sync({force: true}).then(function () {
    //     return Signups.create({
    //     number: '7000790258',
    //     email: 'rohit@gmail.com',
    //     password: 'Zgv674',
    //     username: 'mv007'
    //     });
    // });
    

module.exports = Signups;