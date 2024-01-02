const authService = require("../service/authService");
const bcrypt = require("bcrypt");
const users = require("../model/users");
const message = require("../message/message.json");
var jwt = require("jsonwebtoken");


module.exports = {
  register: async (req, res) => {
    try {
      const { email, username, password, confirmpassword, mobile } = req.body;
      const existingUser = await users.findOne({ where: { userName : username } });
      if (existingUser) {
        return res.status(400).send({ message: message.user_already_exits });
      }
      await authService.register({
        email,
        username,
        password,
        confirmpassword,
        mobile,
      });
      return res.status(200).send({ message: message.register_success });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: message.server_error });
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      if (username && password) {
        const user = await users.findOne({ where: { userName: username } });
        if (user && user.password) {
          const isValid = await authService.isValidPassword({
              password,
              userPassword: user.password,
            })
          if (isValid) {
            const accessToken =  await authService.getToken(user);
            const refreshToken = await  authService.getRefreshToken(user);
            return res.status(200).send({
              message: message.login_success,
              accessToken: accessToken,
              refreshToken: refreshToken,
            });
          } else {
            return res.status(401).send({ message: message.invalid_request });
          }
        }
      } else {
        return res.status(400).send({ message: message.required_fields });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: message.server_error });
    }
  },

};
