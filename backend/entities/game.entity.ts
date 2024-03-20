import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Session } from './session.entity';
import { ParticipantScore } from './participant-score.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  averageEstimationScore: number;

  @ManyToOne(() => Session, session => session.games)
  session: Session;

  @OneToMany(() => ParticipantScore, participantScore => participantScore.game)
  participantScores: ParticipantScore[];
}
