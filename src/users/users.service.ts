import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async find() {
    const data = await this.userRepository.find();
    return { success: true, message: 'Berhasil get data', data: data };
  }

  async findOneBy(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  create(name: string, email: string, password: string) {
    // buat instance objeck
    const user = this.userRepository.create({ name, email, password });

    // simpan ke db
    return this.userRepository.save(user);
    // return { success: true, message: 'Berhasil menyimpan data', user: user };
  }

  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOneBy(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // timpa dengan yang baru
    Object.assign(user, attrs);

    // simpan
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.findOneBy(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.userRepository.remove(user);
  }
}
