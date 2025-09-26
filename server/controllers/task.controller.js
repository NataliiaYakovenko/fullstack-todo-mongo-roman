const { Task } = require("../models");

module.exports.getAllTasksUser = async (req, res, next) => {
  try {
    const {
      tokenPayload: { userId },
    } = req;

    const userTasks = await Task.find({
      authorId: userId,
    });
    return res.status(200).send({ data: userTasks });
  } catch (error) {
    next(error);
  }
};

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      body,
      tokenPayload: { userId },
    } = req;

    const createdUserTask = await Task.create({ ...body, authorId: userId });

    if (!createdUserTask) {
      return res.status(400).send("Task is not created");
    }
    return res.status(201).send({ data: createdUserTask });
  } catch (error) {
    next(error);
  }
};
