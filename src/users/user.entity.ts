import { Exclude } from 'class-transformer';
import { AfterInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Exclude() // buat pengecualian password agar tidak ikut get query
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id: ' + this.id);
  }
}
