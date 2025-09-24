const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const promissifyJWTSign = promisify(jwt.sign);
const promissifyJWTVerify = promisify(jwt.verify);

const EXPIRES_TIME = 100; //якщо вказувати числом, то це в секундах

const secretWord = "Euro-2024";

module.exports.createToken = async ({ userId, email }) =>
  await promissifyJWTSign({ userId, email }, secretWord, {
    expiresIn: EXPIRES_TIME,
  });

module.exports.verifyToken = async (token) =>
  await promissifyJWTVerify(token, secretWord);
