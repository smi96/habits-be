import {Inject, Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";

@Injectable()
export class TypeOrmHabitConfigService implements TypeOrmOptionsFactory {

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name: 'PG_HABITSDB',
            type: "postgres",
            host: 'localhost',
            port: 5432,
            username: 'suyashmishra',
            password: '',
            database: 'habitsdb',
            entities: []
        }
    }
}