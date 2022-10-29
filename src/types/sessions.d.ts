import { Request } from 'express';
import { Session } from 'express-session';
import { IUser } from '../database';

interface CustomSession extends Session {
  user?: IUser;
}

interface RequestWithSession extends Request {
  session: Session & CustomSession;
}
