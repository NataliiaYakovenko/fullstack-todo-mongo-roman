const mongoose = require("mongoose");
const { DB } = require("../configs/db");
const User = require("./User");

mongoose.connect(DB).catch((err) => {
  console.log(`Connect fallen : ${err.messge}`);
});

module.exports = { User };
