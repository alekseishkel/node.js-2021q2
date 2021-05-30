import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

export const config = {
  "PORT": process.env,
  "NODE_ENV": process.env,
  "MONGO_CONNECTION_STRING": process.env,
  "JWT_SECRET_KEY": process.env,
  "AUTH_MODE": process.env
};