import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 100 })
  name?: string;

  @Column('varchar', { length: 100 })
  login?: string;

  @Column('varchar', { length: 100 })
  password?: string;
}