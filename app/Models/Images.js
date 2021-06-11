const Sequelize = require('sequelize')
const sequelize = require('../../connection/connection')
import CollectionsStatus from '../enum/type';
import { table } from '../constant';
module.exports = sequelize.define('collections', {
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
        values:[
          CollectionsStatus.CATALOG,
          CollectionsStatus.COLLECTION_BANNERS,
          CollectionsStatus.LOOKS,
          CollectionsStatus.CUSTOM_PRODUCT_IMAGES,
          CollectionsStatus.PROFILE,
      ],
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
      updatedBy: {
          type: Sequelize.STRING
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
     }, {
  timestamps: true,
  paranoid: true,
  freezeTableName: true,
  tableName: table.Collections
});

