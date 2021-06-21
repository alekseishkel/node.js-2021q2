import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class ColumnEntity {
  @PrimaryColumn('uuid')
  id?: string;

  @Column()
  title?: string

  @Column()
  order?: number
}
