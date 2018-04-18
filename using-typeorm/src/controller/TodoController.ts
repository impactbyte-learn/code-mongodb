import { Todo } from "../entity/Todo";

export class TodoController {
  public static async find() {
    console.log("[i] FIND");
    const todos = await Todo.find();
    if (!todos) console.log("[i] ERROR");
    console.log(todos);
  }

  public static async findByText(text) {
    console.log("[i] FIND BY TEXT");
    const todos = await Todo.findByText(text);
    if (!todos) console.log("[i] ERROR");
    console.log(todos);
  }

  public static async create(text) {
    console.log("[i] CREATE");
    const todo = await Todo.create({ text });
    todo.save();
    console.log("[i] NEW TODO CREATED", todo);
  }

  public static async delete() {
    console.log("[i] DELETE");
  }

  public static async deleteOne() {
    console.log("[i] DELETE ONE");
  }

  public static async updateOne() {
    console.log("[i] UPDATE ONE");
  }
}
