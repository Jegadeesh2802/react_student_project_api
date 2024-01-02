const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/config');


class users extends Model{ }

users.init({
  id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false,
  },  
  userName:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'user_name'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'password'
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'confirm_password'
  },
  mobileNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field:'mobile_number'
  },
  createdAt:{
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt:{
    type: DataTypes.DATE,
    allowNull: false,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  }
},
  {
    sequelize,
    modelName: 'users',
    freezeTableName:true,
})

module.exports = users;

