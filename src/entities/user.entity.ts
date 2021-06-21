import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 25 })
  name?: string;

  @Column('varchar', { length: 25 })
  login?: string;

  @Column('varchar', { length: 25 })
  password?: string;
}