import { DataTypes } from 'sequelize';
import { sequelize } from '../connect.db';

export const UserSchema = sequelize.define('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
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
