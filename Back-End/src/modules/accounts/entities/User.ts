import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {
  adjectives,
  animals,
  colors,
  names,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.username) {
      this.username = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, names],
        separator: "-",
      });
    }
  }
}

export { User };
