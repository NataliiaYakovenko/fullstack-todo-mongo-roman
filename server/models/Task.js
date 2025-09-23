const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new mongoose.Schema({
  authorId: {
    type: Schema.Types.ObjectID,
    ref: "User",
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
    //validation deadline > createdAt
  },
  status: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
