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
      return res.status(400).send({ err: "Task is not created" });
    }
    return res.status(201).send({ data: createdUserTask });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { taskId },
    } = req;
    const {
      tokenPayload: { userId },
    } = req;

    const deletedTask = await Task.findOneAndDelete({
      _id: taskId,
      authorId: userId,
    });

    if (!deletedTask) {
      return res.status(404).send({ err: "Task not found" });
    }
    return res.status(200).send({ data: deletedTask });
  } catch (error) {
    next(error);
  }
};
