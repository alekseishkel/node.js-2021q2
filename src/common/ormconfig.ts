import { ConnectionOptions } from 'typeorm';
import { config } from './config'
import { BoardEntity } from '../entities/board.entity';
import { ColumnEntity } from '../entities/column.entity';
import { TaskEntity } from '../entities/task.entity';
import { UserEntity } from '../entities/user.entity';

export const ormConfig = {
  type: 'postgres',
  port: config.PG_PORT,
  host: config.HOST,
  database: config.DATABASE,
  username: config.USER,
  password: config.PASSWORD,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
  entities: [BoardEntity, ColumnEntity, TaskEntity, UserEntity],
  migrationsRun: true,
  synchronize: false,
  migrations: ["migration/*.js"],
  cli: {
    migrationsDir: "src/migration"
  }
} as ConnectionOptions;