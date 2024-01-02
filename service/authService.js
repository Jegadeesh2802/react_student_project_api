const users = require('../model/users');
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");


module.exports = {
  register: async ({ email,username, password, mobile }) => {

  password = bcrypt.hashSync(password, 8);
    return await users.create({
       email,
       userName: username, 
       password ,
       confirmPassword:  password,
       mobileNumber: mobile
  });
  },
  getUser: async (username) => {
    return await users.findOne({
      where: {
        userName :username
      }
    })
  },
  isValidPassword: async ({ password, userPassword }) => {
    const passwordIsValid = bcrypt.compareSync(password, userPassword);
    return passwordIsValid;
  },
  getToken: async (user) => {
    const token = jwt.sign({ id: user.id }, '6ef6051caa1ba975e3658da2f8ac66e9e3819e639197233239b2d86e50a2aabc502b1bd9553ac7edff9efd5f1c9d3ab45892eca04107e8890963649a1edfb103', {
      expiresIn: '30d', // expires in 30 days
    });
    console.log(token,"accessToken")
    return token;
  },
  getRefreshToken: async (user) => {
    const refreshToken = jwt.sign(
      { id: user.id },'fileMasterR',
      {
        expiresIn: '30d',
      },
    );
    console.log(refreshToken,"refreshToken")
    return refreshToken;
  }
}