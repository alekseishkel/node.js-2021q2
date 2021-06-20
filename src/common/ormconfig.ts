import { ConnectionOptions } from 'typeorm';
import { config } from './config'

export const ormConfig = {
  type: 'postgres',
  name: 'rs-node-js',
  port: config.PORT,
  host: config.HOST,
  database: config.DATABASE,
  username: config.USER,
  password: config.PASSWORD,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
} as ConnectionOptions;