const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  <DB_NAME>,
  <username>,
  <password>,

  {
    host: <hostname>,
    dialect: <software used like mysql,postgres etc.>,

    define: {
      timestamps: true,
    },

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);
try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

global.sequelize = sequelize;
module.exports = sequelize;
