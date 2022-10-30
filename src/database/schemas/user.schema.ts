import { DataTypes } from 'sequelize';
import { sequelize } from '../connect.db';
import { IUserInstance } from '../types';

export const UserSchema = sequelize.define<IUserInstance>('User', {
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
  },
  seniority: {
    type: DataTypes.STRING
  }
});
