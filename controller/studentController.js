const studentService = require("../service/studentService");
const bcrypt = require("bcrypt");
const student = require("../model/student");
const message = require("../message/message.json");

module.exports = {
  get_all_student: async (req, res) => {
    try {
      const getAllStudent = await studentService.getAllStudent();
      return res.status(200).send(getAllStudent);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: message.server_error });
    }
  },
  create: async (req, res) => {
    const userId = req.userId;

    console.log(userId, "Logged user")
    const {
      name,
      age,
      dateOfBirth,
      city,
      mobile,
      email,
      college,
      course,
      passedOut,
    } = req.body;
    console.log(
      name,
      age,
      dateOfBirth,
      city,
      mobile,
      email,
      college,
      course,
      passedOut ,userId,"DETAILS")
    try {
      await studentService.create({
        name,
        age,
        dateOfBirth,
        city,
        mobile,
        email,
        college,
        course,
        passedOut,
        userId
      });
      return res.status(200).send({ message: message.student_created });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ message: message.server_error });
    }
  },
  get_user: async (req, res) => {
    try {
      const userId = req.userId;
      const getUserData = await studentService.getData(userId);
      return res.status(200).send(getUserData);
    }
    catch (error) {
      console.log(error);
      return res.status(500).send({ message: message.server_error });
    }
  }
};
