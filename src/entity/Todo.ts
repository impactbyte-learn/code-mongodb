import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("todos")
export class Todo extends BaseEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column() text: string;

  @Column("datetime") created_at: Date;

  public static async findByText(text: string): Promise<Todo[]> {
    return await this.find({ where: { text } });
  }

  findText(text) {
    return Todo.find({ where: { text } });
  }
}
