import { BaseEntity, Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column() email: string;

  @Column() password: string;

  @Column("datetime") created_at: Date;

  public static async findByEmail(email: string): Promise<User[]> {
    return await this.find({ where: { email } });
  }
}
