import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/data')
  async getExample(@Body() data: any, @Res() res: Response): Promise<any> {
    const user = {
      username: 'rohmat',
      password: '123456',
    };

    return { message: 'Berhasil get data', data: user };
  }
}
