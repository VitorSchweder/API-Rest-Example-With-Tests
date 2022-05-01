'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },     
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },   
      address: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      city: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      uf: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  }
};
