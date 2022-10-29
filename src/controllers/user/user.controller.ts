import { AppError } from './../../utils/appError';
import { CreateUserParams } from '@/routes/user/user.routes.type';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { UserSchema } from '../../database';
import { EmailAlreadyExistsError } from './user.controller.errors';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password }: CreateUserParams = req.body;
    const emailAlreadyExists = await UserSchema.findOne({
      where: {
        email
      }
    });
    if (emailAlreadyExists) {
      throw new EmailAlreadyExistsError();
    }
    const User = await UserSchema.create({
      email,
      firstName,
      lastName,
      password: await hash(password, 10)
    });
    res.json(User);
  } catch (error) {
    if (error instanceof AppError) {
      console.log(error);
      return res.status(error.code).json({ errors: [error.message], type: error.type });
    }
    res.status(500).json({ errors: error });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const Users = await UserSchema.findAll();
    res.json(Users);
  } catch (error) {
    res.send(error);
  }
};
