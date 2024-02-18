import { IsEmail, IsString } from 'class-validator';

// untuk interface, seperti validasi
export class UserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
