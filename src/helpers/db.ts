import { getConnection, createConnection } from 'typeorm'
import { ormConfig } from '../common/ormconfig';
import { logInfo, logError } from '../utils/logger';

const connectToDB = async () => {
  let connection;
  
  try {
    connection = getConnection();
  } catch (err) {
    logError(`${`DB connection error:${  err}`}`);
  }

  try {
    if (connection) {
      if (!connection.isConnected) {
        await connection.connect();
      }
    } else {
      await createConnection(ormConfig);
    }
    logInfo("Succesfully connected to DB");
  } catch (err) {
    logError(`${`DB connection error:${  err}`}`);
  }
};

export const tryDBConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    logError(`${`DB connection error:${  err}`}`);
  }
};
