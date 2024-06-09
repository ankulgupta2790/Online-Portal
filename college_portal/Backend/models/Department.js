const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Department = db.define('Department', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Department;
