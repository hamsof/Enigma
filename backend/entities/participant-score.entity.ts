import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Game } from './game.entity';
import { Participant } from './participant.entity';


@Entity()
export class ParticipantScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @ManyToOne(() => Game, game => game.participantScores)
  game: Game;

  @ManyToOne(() => Participant, participant => participant.participantScores)
  participant: Participant;
}
