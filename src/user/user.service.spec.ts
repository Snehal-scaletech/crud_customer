import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import * as bcryptUtils from '../utils/crypto';

const userdata = {
  id: 1,
  firname: 'Snehal',
  lastname: 'Helonde',
  email: 'snehalhelonde123@gmail.com',
  password: '123456',
  phone: '+9145456456456',
  address: 'Katol, nagpur, MH',
  gender: 'Female',
  date_of_birth: '2022-02-12',
};
describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<User>;
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    userService = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
  it('userRepository should be defined', () => {
    expect(userRepository).toBeDefined();
  });

  describe('createUser', () => {
    it('should be used to encode password', async () => {
      await userService.createUser(userdata);
      jest
        .spyOn(bcryptUtils, 'encodePassword')
        .mockReturnValue(Promise.resolve('123456'));

      expect(bcryptUtils.encodePassword).toBeDefined();
    });

    it('should call user repository with correct params', async () => {
      await userService.createUser(userdata);
      expect(userRepository.save).toHaveBeenCalledWith(userdata);
    });

    it('should be used to get the list of user', async () => {
      await userService.getUserList();
      expect(userRepository.find).toHaveBeenCalledWith();
    });

    it('should be used to get the user details by its id', async () => {
      await userService.getUserDetailsByID(userdata.id);
      expect(userRepository.findOne).toHaveBeenCalled();
    });

    it('should be used to update the user details', async () => {
      await userService.updateUser(userdata.id, userdata);
      expect(userRepository.update).toHaveBeenCalled();
    });

    it('should be used to delete the user', async () => {
      await userService.deleteUser(userdata.id);
      expect(userRepository.delete).toHaveBeenCalled();
    });

    it('should be used to check the user email address exist or not', async () => {
      await userService.checkEmailExist(userdata.email);
      expect(userRepository.findOne).toHaveBeenCalled();
    });

    it('should be used to check the user phone number exist or not', async () => {
      await userService.checkPhoneExist(userdata.phone);
      expect(userRepository.findOne).toHaveBeenCalled();
    });
  });
});
