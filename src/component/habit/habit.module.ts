import { Module } from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { HabitLog } from "./entity/habit-log.entity";
import { Habit } from "./entity/habit.entity";

@Module({
    imports : [
        TypeOrmModule.forFeature([Habit, HabitLog], 'PG_HABITSDB'),
    ],
    controllers: [],
    providers: []
})
export class HabitModule {}
