'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      locationAccount: {
        allowNull: true,
        type: Sequelize.STRING
      },
      businessName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      dbaName: {
        allowNull: true,
        type: Sequelize.STRING
      },
      streetAddress: {
        allowNull: true,
        type: Sequelize.STRING
      },
      city: {
        allowNull: true,
        type: Sequelize.STRING
      },
      zipCode: {
        allowNull: true,
        type: Sequelize.STRING
      },
      locationDescription: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mailAddress: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mailCity: {
        allowNull: true,
        type: Sequelize.STRING
      },
      mailZipCode: {
        allowNull: true,
        type: Sequelize.STRING
      },
      naics: {
        allowNull: true,
        type: Sequelize.STRING
      },
      primaryNaics: {
        allowNull: true,
        type: Sequelize.STRING
      },
      councilDistrict: {
        allowNull: true,
        type: Sequelize.STRING
      },
      startDate: {
        allowNull: true,
        type: Sequelize.STRING
      },
      endDate: {
        allowNull: true,
        type: Sequelize.STRING
      },
      location: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Locations');
  }
};