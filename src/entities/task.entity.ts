import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 100 })
  title?: string;

  @Column('integer')
  order?: number;

  @Column('text')
  description?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  userId: string | null | undefined;

  @Column({ type: 'varchar', length: 100, nullable: true })
  boardId: string | null | undefined;

  @Column({ type: 'varchar', length: 100, nullable: true })
  columnId: string | null | undefined;
}