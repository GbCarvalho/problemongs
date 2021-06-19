import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { User } from '../../accounts/entities/User';

@Entity('projects')
class Project {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;


  @ManyToMany(() => User)
  @JoinTable()
  users: User[];

  @Column()
  ongProblemId: string;


  @Column()
  description: string;

  @Column()
  github: string;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Project }
