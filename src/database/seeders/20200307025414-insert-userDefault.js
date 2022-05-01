'use strict';
const configAuth = require('../../config/auth');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const hash = await bcrypt.hash('admin@321', configAuth.SALT_ROUNDS);

      return queryInterface.bulkInsert('users', [{
        name: 'Administrador',
        email: 'admintest@email.com',
        password_hash: hash,        
        profile_id: 1,
        is_active: true,
        created_at : new Date(),
        updated_at : new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
