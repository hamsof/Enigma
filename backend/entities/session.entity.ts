import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Participant } from './participant.entity';
import { Game } from './game.entity';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  url: string;

  @Column()
  isActive: boolean;

  @ManyToOne(() => User, user => user.sessions)
  user: User;

  @OneToMany(() => Participant, participant => participant.session)
  participants: Participant[];

  @OneToMany(() => Game, game => game.session)
  games: Game[];
}
