import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Todo {
  @ObjectIdColumn() id: ObjectID;

  @Column() text: string;
}
