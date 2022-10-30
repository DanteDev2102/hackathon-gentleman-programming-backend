import { RegisterUserSchema } from '../../schemas/user/user.schema';
import { validateSchema } from '../../middlewares';
import { IRouter, Router } from 'express';
import * as controllers from '../../controllers';

const userRoutes: IRouter = Router();

userRoutes.get('/', controllers.getUsers);
userRoutes.post('/register', validateSchema(RegisterUserSchema), controllers.registerUser);
userRoutes.post('/login', controllers.login);

export default userRoutes;
