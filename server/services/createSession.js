const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const {
  refreshSecretWord,
  REFRESH_EXPIRES_TIME,
  accesSecretWord,
  ACCES_EXPIRES_TIME,
} = require("../configs/constants");

const promissifyJWTSign = promisify(jwt.sign);
const promissifyJWTVerify = promisify(jwt.verify);

module.exports.createAccesToken = async ({ userId, email }) =>
  await promissifyJWTSign({ userId, email }, accesSecretWord, {
    expiresIn: ACCES_EXPIRES_TIME,
  });

module.exports.verifyAccesToken = async (token) =>
  await promissifyJWTVerify(token, accesSecretWord);

module.exports.creatRefreshToken = async ({ userId, email }) =>
  await promissifyJWTSign({ userId, email }, refreshSecretWord, {
    expiresIn: REFRESH_EXPIRES_TIME,
  });

module.exports.verifyRefreshToken = async (token) =>
  await promissifyJWTVerify(token, refreshSecretWord);
