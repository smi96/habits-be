import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmHabitConfigService } from './shared/typeorm/typeorm.habit.service';
import { HabitModule } from './component/habit/habit.module';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({name: 'PG_HABITSDB' ,useClass: TypeOrmHabitConfigService}),
    HabitModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
