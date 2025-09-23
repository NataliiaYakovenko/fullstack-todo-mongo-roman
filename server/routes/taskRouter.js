const Router  = require("express");
const TaskController = require("../controllers/task.controller");

const taskRouter = Router();

//http://localhost:5000/api/tasks
taskRouter.post('/', TaskController.createTask)

//http://localhost:5000/api/tasks/userId
taskRouter.get('/:userId', TaskController.getAllTasksUser)

module.exports = taskRouter;
