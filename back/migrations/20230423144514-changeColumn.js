"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "Users",
          "email",
          {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: true,
            unique: true,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "Users",
          "nickname",
          {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: true,
          },
          { transaction: t }
        ),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "Users",
          "email",
          {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: false,
            unigue: true,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "Users",
          "nickname",
          {
            type: Sequelize.DataTypes.STRING(30),
            allowNull: false,
            unique: true,
          },
          { transaction: t }
        ),
      ]);
    });
  },
};
