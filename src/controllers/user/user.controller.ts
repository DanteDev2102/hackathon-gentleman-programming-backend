import { AppError } from './../../utils/appError';
import { CreateUserParams, UserLoginParams } from '../../routes';
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import { UserSchema } from '../../database';
import { EmailAlreadyExistsError, InvalidUserData } from './user.controller.errors';
import { compare } from 'bcryptjs';
import { RequestWithSession } from '../../types/sessions';

export const registerUser = async (req: RequestWithSession, res: Response) => {
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
    req.session.user = User;
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

export const getLoggedUser = async (req: RequestWithSession, res: Response) => {
  try {
    console.log(req.session.user?.email);
    res.send(req.session.user);
  } catch (error) {
    res.send(error);
  }
};

export const userLogin = async (req: RequestWithSession, res: Response) => {
  try {
    const loginData: UserLoginParams = req.body;
    const User = await UserSchema.findOne({
      where: {
        email: loginData.email
      }
    });
    if (!User) throw new InvalidUserData();
    const isPasswordValid = await compare(loginData.password, User.password);
    if (!isPasswordValid) throw new InvalidUserData();
    req.session.user = User;
    const userToReturn: any = User.toJSON();
    delete userToReturn.password;
    delete userToReturn.id;
    res.json(userToReturn);
  } catch (error) {
    if (error instanceof AppError) {
      console.log(error);
      return res.status(error.code).json({ errors: [error.message], type: error.type });
    }
    res.status(500).json({ errors: error });
  }
};
