import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() body: UserDto) {
    console.log(body);

    return body;
  }
}
