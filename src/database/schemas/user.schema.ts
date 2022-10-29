import { IUser } from './../types/user.type';
import { DataTypes } from 'sequelize';
import { sequelize } from '../connect.db';

export const UserSchema = sequelize.define<IUser>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  }
});
