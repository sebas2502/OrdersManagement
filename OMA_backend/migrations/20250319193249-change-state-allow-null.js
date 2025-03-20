'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('orders', 'state', {
            type: Sequelize.STRING,
            allowNull: false
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.changeColumn('orders', 'state', {
            type: Sequelize.STRING,
            allowNull: true
        });
    }
};

