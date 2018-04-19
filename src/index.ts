import "reflect-metadata";
import { createConnection } from "typeorm";

import { TodoController } from "./controller/TodoController";
import { Todo } from "./entity/Todo";

// connection settings are in the "ormconfig.json" file
createConnection()
  .then(async connection => {
    console.log("1. CREATE");
    await TodoController.create("Code with Node.js");

    console.log("2. FIND ALL");
    await TodoController.findAll();

    console.log("3. FIND BY TEXT: node");
    const query = "node";
    const regex = new RegExp(query, "i");
    await TodoController.findByText(regex);

    console.log("0. FINISH");
  })
  .catch(error => console.log("Error: ", error));
