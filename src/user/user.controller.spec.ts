import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcryptUtils from '../utils/crypto';
import { UserController } from './user.controller';
import { UserDto } from './dto/user.dto';

const userdata = {
  id: 1,
  firstname: 'Snehal',
  lastname: 'Helonde',
  email: 'snehalhelonde123@gmail.com',
  password: '123456',
  phone: '+9145456456456',
  address: [
    {
      flat_no: '123',
      landmark: 'Kargil petrol pump',
      city: 'Katol',
      state: 'MH',
      country: 'India',
    },
  ],
  gender: 'Female',
  date_of_birth: new Date(),
};
describe('UserController', () => {
  let userController: UserController;
  let userRepository: Repository<User>;
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();
    userController = module.get<UserController>(UserController);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
  it('userRepository should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  describe('createUser', () => {
    it('should be used to add new user', async () => {
      const saveUser = await userController.addUser(userdata);
      expect(saveUser).toHaveProperty('data');
      expect(saveUser).toHaveProperty('message');
    });

    it('should be used to get user list', async () => {
      const getUser = await userController.getUserList();
      expect(getUser).toHaveProperty('data');
      expect(getUser).toHaveProperty('message');
    });

    it('should be used to get user details by id', async () => {
      const getUser = await userController.getUserDetailsByID(userdata.id);
      expect(getUser).toHaveProperty('data');
      expect(getUser).toHaveProperty('message');
    });

    it('should be used to update user details', async () => {
      const getUser = await userController.updateUser(userdata.id, userdata);
      expect(getUser).toHaveProperty('data');
      expect(getUser).toHaveProperty('message');
    });

    it('should be used to delete user', async () => {
      const getUser = await userController.deleteUser(userdata.id);
      expect(getUser).toHaveProperty('data');
      expect(getUser).toHaveProperty('message');
    });
  });
});
