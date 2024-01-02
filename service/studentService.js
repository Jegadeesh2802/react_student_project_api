const student = require("../model/student")

module.exports = {
  getAllStudent: async () => {
    return await student.findAll()
  },
  create: async ({
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
  }) => {
    await student.create({
      name,
      age,
      dateOfBirth: dateOfBirth,
      city,
      mobile,
      email,
      college,
      course,
      passedOut,
      userId : userId
    })
  },
  getData: async (userId) => {
    return await student.findAll({
      where: {
        userId: userId
      }
    })
  }
} 