import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnEntity } from "./column.entity";

@Entity({name: 'board'})
export class BoardEntity {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', {length: 100})
  title?: string;

  @Column('jsonb', {nullable: true})
  columns?: ColumnEntity[] | [];
}