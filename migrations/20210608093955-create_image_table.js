'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("collections", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      info: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.ENUM,
        values:["PROFILE","COLLECTION_BANNERS","CUSTOM_PRODUCT_IMAGES","CATALOG","LOOKS"],
        allowNull: false
      },
      name: {
          type: Sequelize.STRING(1024),
          allowNull: false
      },
      isPublic: {
          type: Sequelize.BOOLEAN,
          defaultValue : false
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
        defaultValue : false
      },
      isApprovalNeeded: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      approvedBy: {
          type: Sequelize.BIGINT,
          allowNull: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      updatedBy: {
        type: Sequelize.DATE
      },
      createdAt: Sequelize.DATE,
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      accountID: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
     })

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("collections");
  }
};
