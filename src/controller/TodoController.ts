import { Todo } from "../entity/Todo";

export class TodoController {
  public static async findAll() {
    try {
      const todos = await Todo.find();
      console.log(todos);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async findByText(text) {
    try {
      const todos = await Todo.findByText(text);
      console.log(todos);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async create(text) {
    try {
      const payload = {
        text,
        created_at: new Date()
      };
      const todo = await Todo.create(payload);
      todo.save();
      console.log("[i] NEW TODO CREATED", todo);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyAll() {
    try {
      await Todo.clear();
      console.log("[i] ALL TODOS DELETED");
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyById(id: string) {
    try {
      await Todo.removeById(id);
      console.log(`[i] TODO WITH ID ${id} DELETED`);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyByText(text: string) {
    try {
      const id = await Todo.findByText(text);
      await Todo.remove(id);
      console.log("[i] ALL TODOS DELETED");
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async updateById(id: string, newText: string) {
    try {
      await Todo.updateById(id, { text: newText });
      console.log(`[i] TODO WITH ID ${id} IS UPDATED`);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }
}
