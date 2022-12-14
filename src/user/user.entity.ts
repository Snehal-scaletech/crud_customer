import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  date_of_birth: Date;

  @Column()
  address: string;

  @Column()
  gender: string;

  @Column({ default: true })
  status: boolean;

  @Column({ default: false })
  is_deleted: boolean;
}
