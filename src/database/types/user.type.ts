import { Model, Optional } from 'sequelize';

export interface IUser {
  id?: string;
  seniority?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserCreate extends Optional<IUser, 'id'> {}
export interface IUserInstance extends Model<IUser, IUserCreate>, IUser {
  createdAt?: Date;
  updatedAt?: Date;
}
