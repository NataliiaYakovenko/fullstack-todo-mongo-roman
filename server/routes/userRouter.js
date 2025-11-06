const {Router} = require("express");
const userController = require("../controllers/user.controller");
const { hashPassword } = require("../middlewares/hashPassword");
const { checkToken } = require("../middlewares/checkToken");

const userRouter = Router();

//POST http://localhost:5000/api/users/sign-up
userRouter.post("/sign-up", hashPassword, userController.registrationUser);

//POST http://localhost:5000/api/users/sign-in
userRouter.post("/sign-in", userController.loginUser);

//GET http://localhost:5000/api/users/
userRouter.get("/", checkToken, userController.checkAuth);

//POST http://localhost:5000/api/users/refresh
userRouter.post("/refresh", userController.createNewTokenByQRCodeAuth);

//POST http://ipv4:5000/api/users/authByQRCode
userRouter.post("/authByQRCode", userController.createNewTokenByQRCodeAuth);

module.exports = userRouter;
