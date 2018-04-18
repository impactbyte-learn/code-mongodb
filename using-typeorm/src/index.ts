import "reflect-metadata";
import { createConnection } from "typeorm";

import { TodoController } from "./controller/TodoController";
import { Todo } from "./entity/Todo";

// connection settings are in the "ormconfig.json" file
createConnection()
  .then(async connection => {
    TodoController.create();
    // TodoController.find();
  })
  .catch(error => console.log("Error: ", error));
