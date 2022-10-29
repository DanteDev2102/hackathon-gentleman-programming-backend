import { RegisterUserSchema } from '../../schemas/user/user.schema';
import { validateSchema } from '../../middlewares';
import { IRouter, Router } from 'express';
import { getUsers, registerUser } from '../../controllers';

const userRoutes: IRouter = Router();

userRoutes.get('/', getUsers);
userRoutes.post('/register', validateSchema(RegisterUserSchema), registerUser);

export default userRoutes;
