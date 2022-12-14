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
  constructor(private userService: UserService) {}
  @Post()
  async addUser(@Body() userDto: UserDto, @Response() res) {
    const result = await this.userService.createUser(userDto);
    return res
      .status(200)
      .json({ code: 1, message: 'User added successfully', data: result });
  }

  @Get()
  async getUserList(@Response() res) {
    const result = await this.userService.getUserList();
    return res
      .status(200)
      .json({ code: 1, message: 'User list found successfully', data: result });
  }

  @Get('/:id')
  async getUserDetailsByID(@Param('id') id: number, @Response() res) {
    const result = await this.userService.getUserDetailsByID(id);
    return res.status(200).json({
      code: 1,
      message: 'User details found successfully',
      data: result,
    });
  }

  @Patch('/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() userUpdateDto: UserUpdateDto,
    @Response() res,
  ) {
    const result = await this.userService.updateUser(id, userUpdateDto);
    return res.status(200).json({
      code: 1,
      message: 'User has been updated successfully',
    });
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: number, @Response() res) {
    const result = await this.userService.deleteUser(id);
    return res.status(200).json({
      code: 1,
      message: 'User has been deleted successfully',
    });
  }
}
