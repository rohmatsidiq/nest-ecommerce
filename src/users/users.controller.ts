import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseInterceptors(SerializeInterceptor) // gunakan midleware
  @Get()
  find() {
    return this.userService.find();
  }

  @UseInterceptors(SerializeInterceptor) // gunakan midleware
  @Get('/:id')
  findOneBy(@Param('id') id: string) {
    return this.userService.findOneBy(parseInt(id));
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.userService.create(body.name, body.email, body.password);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.update(parseInt(id), body);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.remove(parseInt(id));
  }
}
