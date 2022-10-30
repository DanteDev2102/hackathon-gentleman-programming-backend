import express, { Application, json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { routes } from './utils';
import { version } from '../package.json'

const routeContainer = (app: Application) => () => routes(app);

const app: Application = express();
const versionApi = version.charAt(0)


app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(`/v${versionApi}`, routeContainer(app))


export default app;
