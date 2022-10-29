import { LoginUserSchema, RegisterUserSchema } from '../../schemas/user/user.schema';
import { validateSchema } from '../../middlewares';
import { IRouter, Router } from 'express';
import { getLoggedUser, getUsers, registerUser, userLogin } from '../../controllers';

const userRoutes: IRouter = Router();

userRoutes.get('/', getUsers);
userRoutes.post('/register', validateSchema(RegisterUserSchema), registerUser);
userRoutes.post('/login', validateSchema(LoginUserSchema), userLogin);
userRoutes.get('/getUser', getLoggedUser);

export default userRoutes;
