const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/impactodo");

const Todo = mongoose.model("Todo", { text: Number });

const newTodo = new Todo({ text: "Learn something" });

newTodo.save().then(() => console.log("inserted"));

Todo.update(
  { text: { $regex: /mongo/ } },
  { $set: { text: "Learn something new" } },
  (err, result) => {
    console.log(result);
  }
);
