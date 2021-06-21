import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class ColumnEntity {
  @PrimaryColumn()
  id: string = uuid()

  @Column()
  title?: string

  @Column()
  order?: number
}
