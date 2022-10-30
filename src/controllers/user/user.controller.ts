import { AppError } from './../../utils/appError';
import { CreateUserParams } from '@/routes/user/user.routes.type';
import bcrypt, { hash } from 'bcrypt';
import { Request, Response, RequestHandler } from 'express';
import { UserSchema } from '../../database';
import { EmailAlreadyExistsError } from './user.controller.errors';
import jsonwebtoken from 'jsonwebtoken';
import config from '../../config';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, firstName, lastName, password, seniority }: CreateUserParams = req.body;
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
      password: await hash(password, 10),
      seniority
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

export const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserSchema.findOne({ where: { email: email } });
    console.log(user);
    if (user) {
      // Validate Pass
      bcrypt.compare(password, user.password, (err, resp) => {
        if (err) {
          // handle error
          return res.json(err);
        }
        if (resp) {
          // Send JWT
          // res.status(200).json({ message: "Valid password" })
          const token = jsonwebtoken.sign({ id: user.id }, config.JWT_TOKEN, {
            expiresIn: 60 * 60 * 24
          });
          const result = {
            id: user.id,
            auth: true,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            seniority: user.seniority,
            token: token
          };
          return res.json(result);
        } else {
          // response is OutgoingMessage object that server response http request
          return res.json({ success: false, message: 'passwords do not match' });
        }
      });
      return;
    } else {
      return res.status(401).json({ error: 'User does not exist' });
    }
  } catch (error) {
    return res.json(error);
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
