import 'dotenv/config';

const config = {
  // server configs

  portServer: process.env.PORT_SERVER ?? 3001,
  hostServer: process.env.HOST_SERVER ?? 'http://localhost',

  // db config

  DB_HOST: process.env.DB_HOST ?? 'localhost',
  DB_PORT: process.env.DB_PORT ?? 5432,
  DB_NAME: process.env.DB_name ?? 'hackaton',
  DB_USER: process.env.DB_USER ?? 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD ?? 'postgres',

  // get On Board public Api
  API_BASE_URL: 'https://www.getonbrd.com/api/v0',
  // JWT
  JWT_TOKEN: process.env.JWT_TOKEN ?? 'secret'
};

export default config;
