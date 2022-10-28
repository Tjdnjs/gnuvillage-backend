import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryColumn({ length: 20 })
  id: string;

  @Column({ length: 60 })
  password: string;
}
