import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column() email: string;

  @Column() password: string;
}
