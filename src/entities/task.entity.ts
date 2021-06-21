import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { length: 25 })
  title?: string;

  @Column('integer')
  order?: number;

  @Column('text')
  description?: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  userId: string | null | undefined;

  @Column({ type: 'varchar', length: 25, nullable: true })
  boardId: string | null | undefined;

  @Column({ type: 'varchar', length: 25, nullable: true })
  columnId: string | null | undefined;
}