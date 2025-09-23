const Router = require("express");
const userRouter = require("./userRouter");
const taskRouter = require('./taskRouter')

const router = Router();

// http://localhost:5000/api/users
router.use("/users", userRouter);

// http://localhost:5000/api/tasks
router.use('/tasks',taskRouter)

module.exports = router;
