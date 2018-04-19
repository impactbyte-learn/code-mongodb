import { User } from "../entity/User";

export class UserController {
  public static async findAll() {
    try {
      const users = await User.find();
      console.log(users);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async findByEmail(text) {
    try {
      const users = await User.findByEmail(text);
      console.log(users);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async create(email, password) {
    try {
      const payload = {
        email,
        password,
        created_at: new Date()
      };
      const user = await User.create(payload);
      user.save();
      console.log("[i] NEW USER CREATED", user);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyAll() {
    try {
      await User.clear();
      console.log("[i] ALL USERS DELETED");
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyById(id: string) {
    try {
      await User.removeById(id);
      console.log(`[i] USER WITH ID ${id} DELETED`);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async destroyByEmail(text: string) {
    try {
      const id = await User.findByEmail(text);
      await User.remove(id);
      console.log("[i] ALL USERS DELETED");
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }

  public static async updateById(id: string, email: string) {
    try {
      await User.updateById(id, { email });
      console.log(`[i] USER WITH ID ${id} IS UPDATED`);
    } catch (error) {
      console.log("[i] ERROR", error);
    }
  }
}
