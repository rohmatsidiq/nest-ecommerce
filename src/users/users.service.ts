import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(name: string, email: string, password: string) {
    // buat instance objeck
    const user = this.userRepository.create({ name, email, password });

    // simpan ke db
    this.userRepository.save(user);
    return { success: true, message: 'Berhasil menyimpan data', user: user };
  }
}
