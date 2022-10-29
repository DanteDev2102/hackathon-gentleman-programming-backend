import { IRouter, Router } from 'express';

const userRoutes: IRouter = Router();

userRoutes.post('/register', async (_req, res) => {
  res.send('user register');
});

export default userRoutes;
