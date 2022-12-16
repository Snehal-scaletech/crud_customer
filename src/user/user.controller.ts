import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Response,
} from '@nestjs/common';
import { UserDto, UserUpdateDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  findAll(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private userService: UserService) {}
  @Post()
  async addUser(@Body() userDto: UserDto) {
    await this.userService.createUser(userDto);
    return {
      data: {},
      message: `User added successfully`,
    };
  }

  @Get()
  async getUserList() {
    await this.userService.getUserList();
    return {
      data: {},
      message: `User list found successfully`,
    };
  }

  @Get('/:id')
  async getUserDetailsByID(@Param('id') id: number) {
    await this.userService.getUserDetailsByID(id);
    return {
      data: {},
      message: `User details found successfully`,
    };
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() userUpdateDto: UserUpdateDto,
  ) {
    await this.userService.updateUser(id, userUpdateDto);
    return {
      data: {},
      message: `User has been updated successfully`,
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number) {
    await this.userService.deleteUser(id);
    return {
      data: {},
      message: `User has been deleted successfully`,
    };
  }
}
