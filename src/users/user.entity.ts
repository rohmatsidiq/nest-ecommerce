import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// buat class dan isikan property yang dibutuhkan
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
