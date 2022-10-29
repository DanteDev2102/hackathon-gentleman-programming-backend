import { CreateUserSchema } from '../../schemas/user/user.schema';
import { validateSchema } from '../../middlewares';
import { IRouter, Router } from 'express';
import { CreateUserParams } from './user.routes.type';

const userRoutes: IRouter = Router();

userRoutes.post('/register', validateSchema(CreateUserSchema), async (req, res) => {
  const user: CreateUserParams = req.body;
  console.log(user);
  res.send('user register');
});

export default userRoutes;
