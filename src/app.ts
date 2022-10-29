import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { routes } from './utils';
import session from 'express-session';
import config from './config';
import ConfigueSequelizeStore from 'connect-session-sequelize';
import { sequelize } from './database';

const SequelizeStore = ConfigueSequelizeStore(session.Store);

const app: Application = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use(
  session({
    secret: config.SESSION_SECRET,
    store: new SequelizeStore({
      db: sequelize
    }),
    resave: false,
    proxy: true
  })
);

routes(app);

export default app;
