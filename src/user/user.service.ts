import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  checkEmailExist(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async checkPhoneExist(phone: string) {
    return this.userRepository.findOne({ where: { phone: phone } });
  }

  async createUser(userData): Promise<User> {
    const emailExist = await this.checkEmailExist(userData.email);
    const phoneExist = await this.checkPhoneExist(userData.phone);

    console.log(emailExist);
    if (emailExist) {
      throw new BadRequestException(`${userData.email} address already exist.`);
    }

    if (phoneExist) {
      throw new BadRequestException(`${userData.phone} number already exist.`);
    }

    const hash = await bcrypt.hash(userData.password, 16);
    userData.password = hash;
    const data = await this.userRepository.save(userData);
    return data;
  }

  async getUserList(): Promise<User[]> {
    const data = await this.userRepository.find();
    return data;
  }

  async getUserDetailsByID(id: number): Promise<User> {
    const data = await this.userRepository.findOne({
      where: { id: id, is_deleted: false },
    });

    return data;
  }

  async updateUser(id: number, userData) {
    const data = await this.userRepository.update(id, userData);
    return data;
  }

  async deleteUser(id: number) {
    const data = await this.userRepository.delete(id);
    return data;
  }
}
