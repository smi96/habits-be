import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm';
import { Habit } from './habit.entity';

@Entity({name: 'habitlog'})
export class HabitLog {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column({ type: 'date' })
    date: string;

    @Column({ type: 'boolean' })
    completed: boolean;

    @ManyToOne(() => Habit, habit => habit.logs, { onDelete: 'CASCADE' })
    habit: Habit;

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