import { Todo } from "../entity/Todo";

export class TodoController {
  public static async find() {
    console.log("FIND");
  }

  public static async insert() {
    console.log("INSERT");
  }

  public static async delete() {
    console.log("DELETE");
  }

  public static async deleteOne() {
    console.log("DELETE ONE");
  }

  public static async updateOne() {
    console.log("UPDATE ONE");
  }
}
