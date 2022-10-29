import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>> {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
