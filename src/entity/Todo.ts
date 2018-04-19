import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity("todos")
export class Todo extends BaseEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column() text: string;

  @Column("datetime") created_at: Date;

  public static findByText(text: string): Promise<Todo[]> {
    return this.find({ where: { text } });
  }
}
