const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express();
const { Schema } = mongoose;
server.use(cors());

const PORT = 3030;

mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const TaskSchema = new Schema({
  title: String,
  description: String,
});

const taskModel = mongoose.model("task", TaskSchema);

server.use(express.json());

server.listen(PORT, () => {
  console.log("listening to port ", PORT);
});

server.post("/create", addTask);
server.get("/", getTasks);
server.delete("/delete/:taskID", deleteTaskHandler);
server.put("/update/:taskID", updataskHandler);








  function getTasks(req, res) { 
    taskModel.find({}, function (err, taskData) {
    console.log("majsjj");

    try {
      res.send(taskData)
    }
    catch(err) {
        console.log(err)
    }
    // if (err) {
    //    console.log("error in getting the data");
    // } else {
    //   // console.log(taskData);

    //   res.send(taskData);
    // }
  });
}

// ======================================addTaskHandler==============================
async function addTask(req, res) {
  let { title, description } = req.body;
  //  console.log(req.body)

  const newTask = new taskModel({
    title: title,
    description: description,
  });
  await newTask.save((err, task) => {
    if (err) {
      return console.log(err);
    }
    res.send(task);
  });
}

// ===============================update task =============================


function updataskHandler(req, res) {
    let taskID = req.params.taskID;
    console.log(taskID)
    let { title, description } = req.body;
    console.log(req.body);
    taskModel.findByIdAndUpdate(taskID, { title, description }, (error, updatedData) => {
        if (error) {
            console.log('error in updating the data')
        } else {
            console.log(updatedData, "Data updated!");

            taskModel.find({}, function (err, data) {
                if (err) {
                    console.log('error in getting the data')
                } else {
                    // console.log(data);
                    res.send(data);
                }
            })
        }
    })
}

// ===============================delete task =============================

async function deleteTaskHandler(req, res) {
  let taskID = req.params.taskID;
  taskModel.remove({ _id: taskID }, (error, taskData) => {
    if (error) {
      console.log("error in deleting the data ");
    } else {
      console.log(taskData);
      taskModel.find({}, function (err, data) {
        if (err) {
          console.log("error in deleting the data ");
        } else {
          // console.log('dima', data);
          res.send(data);
        }
      });
    }
  });
}

class Task {
  constructor({ title, description }) {
    this.title = title;
    this.description = description;
    this.time = time;
  }
}
