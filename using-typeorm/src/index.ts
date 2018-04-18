import "reflect-metadata";
import { createConnection } from "typeorm";

import { TodoController } from "./controller/TodoController";

// connection settings are in the "ormconfig.json" file
createConnection()
  .then(async connection => {
    TodoController.find();
  })
  .catch(error => console.log("Error: ", error));
