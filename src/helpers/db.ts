import { createConnection, Connection } from 'typeorm';
import { ormConfig } from '../common/ormconfig';

export const tryDBConnect = async (): Promise<Connection> => createConnection(ormConfig);