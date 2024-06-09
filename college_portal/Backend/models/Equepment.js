const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');
const Department = require('./Department');

const Equipment = db.define('Equipment', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departmentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Department,
      key: 'id',
    },
  },
});

module.exports = Equipment;
