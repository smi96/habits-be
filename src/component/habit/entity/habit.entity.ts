import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import { HabitLog } from './habit-log.entity';

@Entity({name: 'habit'})
export class Habit {
    @PrimaryGeneratedColumn('identity', { generatedIdentity: 'BY DEFAULT' })
    _id: number;

    @Column({ length: 255 })
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => HabitLog, habitLog => habitLog.habit, { cascade: true })
    logs: HabitLog[];

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;
}