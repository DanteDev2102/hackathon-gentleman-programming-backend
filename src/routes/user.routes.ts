import { CreateUserSchema } from './../schemas/user/user.schema';
import { IUser } from '@/database';
import { validateSchema } from '../middlewares';
import { IRouter, Router } from 'express';

const userRoutes: IRouter = Router();

userRoutes.post('/register', validateSchema(CreateUserSchema), async (req, res) => {
  const user: IUser = req.body;
  console.log(user);
  res.send('user register');
});

export default userRoutes;
