import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'ID' })
  id: string;

  @Column({ name: 'EMAIL' })
  email: string;

  @Column({ name: 'FULL_NAME' })
  fullName: string;

  @Column({ name: 'HASHED_PASSWORD' })
  hashedPassword: string;
}
