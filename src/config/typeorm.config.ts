import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../user/user.entity';
import { userRepository1671007066088 } from '../migrations/1671007066088-userRepository';
export const typeormConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Root@123',
  database: 'crud_typeorm',
  logging: false,
  synchronize: false,
  name: 'default',
  entities: [User],
  migrations: [userRepository1671007066088],
};

export const AppDataSource = new DataSource(typeormConfig);
