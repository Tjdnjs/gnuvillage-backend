// import { NodeConnection } from './../modules/roadmaps/ rDomains/NodeConnection.entity';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'gnuvill',
  password: '1125',
  database: 'gnuvillage',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  // entities: ['/../modules/roadmaps/ rDomains/*.entity'],
  // entities: ['./dist/**/*.entity.js'],
  synchronize: false,
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsRun: true,
});
console.log(__dirname + '/../**/*.entity{.ts,.js}');
export default dataSource;
