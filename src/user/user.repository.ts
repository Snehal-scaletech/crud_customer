import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { AppDataSource } from 'src/config/typeorm.config';

@Injectable()
export class UserRepository extends Repository<User> {
  protected connection = AppDataSource;
  constructor(protected dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
}
