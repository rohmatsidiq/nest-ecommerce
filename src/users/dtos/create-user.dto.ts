import { IsEmail, IsString } from 'class-validator';

// untuk interface, seperti validasi
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
