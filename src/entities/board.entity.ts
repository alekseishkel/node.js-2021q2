import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'board'})
export class BoardEntity {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', {length: 25})
  title?: string;

  @Column({ type: 'json', nullable: true })
  columns?: string;
}