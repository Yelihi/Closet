"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.removeIndex("users", "nickname", { transaction: t })]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([queryInterface.addIndex("users", "nickname", { transaction: t })]);
    });
  },
};
