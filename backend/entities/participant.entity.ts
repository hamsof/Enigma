import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Session } from './session.entity';
import { ParticipantScore } from './participant-score.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Session, session => session.participants)
  session: Session;

  @OneToMany(() => ParticipantScore, participantScore => participantScore.participant)
  participantScores: ParticipantScore[];
}
