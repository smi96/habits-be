import {DataSource} from 'typeorm';

export default new DataSource({
    name: 'PG_HABITSDB',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'suyashmishra',
    password: '',
    database: "habitsdb",
    entities:
        [
            'dist/src/component/habit/entity/*{.ts,.js}'
        ],
    migrations: ["migrations/*.ts"]
});
