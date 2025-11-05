const mongoose = require("mongoose");
const DB_CONFIG = require("../configs/db");
const User = require("./User");
const Task = require("./Task");
const RefreshToken = require("./RefreshToken");

const env = process.env.NODE_ENV || "development";
let dbConfig;
if (env === "development") {
  dbConfig = DB_CONFIG.development;
} else if (env === "production") {
  dbConfig = DB_CONFIG.production;
} else {
  dbConfig = DB_CONFIG.test;
}

mongoose.connect(dbConfig.DB).catch((err) => {
  console.log(`Connect fallen : ${err.messge}`);
});

module.exports = { User, Task, RefreshToken };
