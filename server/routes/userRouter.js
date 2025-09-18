const Router = require("express");
const userController = require("../controllers/user.controller");

const userRouter = Router();


//POST http://localhost:5000/api/users/registration
userRouter.post("/registration", userController.registrationUser)

//POST http://localhost:5000/api/users/login
userRouter.post('/login', userController.loginUser)

module.exports = userRouter;
