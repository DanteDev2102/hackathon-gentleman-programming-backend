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

  // session config

  SESSION_SECRET: process.env.SESSION_SECRET ?? 'Esto_es_de_alto_secreto_xd'
};

export default config;
