const { User } = require("../models");

module.exports.registrationUser = async (req, res, next) => {
  try {
    const { body } = req;

    const createdUser = await User.create(body);
    if (!createdUser) {
      return res.status(400).send("Something was wrong");
    }
    return res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.loginUser = async (req, res, next) => {};
