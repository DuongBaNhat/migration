import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
   type: 'mysql',
   database: 'mydb6',
   username: 'root',
   password: '',
   port: 3306,
   host: 'localhost',
   entities: ['dist/models/**/*.entity{.ts,.js}'],
   synchronize: false, // false để khi bạn thay đổi trong entities nó sẽ không tự update DB
   dropSchema: false,
   migrations: [
     "dist/database/migrations/*.js",
   ],
//    cli: {
//      migrationsDir: 'src/database/migrations' // migrate file sẽ được sinh ra tại đây
//    }
 }

 export default config;
