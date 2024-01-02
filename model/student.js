const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/config');

class student extends Model {}

student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    age: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_of_birth',
    },
    city: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    college: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    course: {
      type: DataTypes.ENUM('ENGINEERING','MEDICAL', 'MANAGEMENT','ARTS','SCIENCE'),
      defaultValue: 'ENGINEERING',
    },
    passedOut: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'passed_out',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  },
  {
    sequelize,
    tableName: 'student',
    timestamps: true,
  }
);

module.exports = student;
