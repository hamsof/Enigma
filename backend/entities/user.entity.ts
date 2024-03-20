import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Session } from './session.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  companyName: string;

  @Column()
  lastLogIn: Date;

  @OneToMany(() => Session, session => session.user)
  sessions: Session[];
}
