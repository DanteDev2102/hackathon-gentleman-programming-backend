import { Sequelize } from 'sequelize';
import config from '../config';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = config;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT as number,
  dialect: 'postgres',
  logging: false,
  native: false
});
