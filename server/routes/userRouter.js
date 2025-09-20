const Router = require("express");
const userController = require("../controllers/user.controller");

const userRouter = Router();


//POST http://localhost:5000/api/users/sign-up
userRouter.post("/sign-up", userController.registrationUser)

//POST http://localhost:5000/api/users/sign-in
userRouter.post('/sign-in', userController.loginUser)

module.exports = userRouter;
