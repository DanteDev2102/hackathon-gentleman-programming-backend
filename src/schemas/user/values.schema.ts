import { z } from 'zod';

export const firstName = z
  .string({
    required_error: 'firstName is required',
    invalid_type_error: 'firstName must be a string'
  })
  .min(4, { message: 'firstName min is 4 characters' })
  .max(25, { message: 'firstName max is 25 characters' });

export const lastName = z
  .string({
    required_error: 'lastName is required',
    invalid_type_error: 'lastName must be a string'
  })
  .min(4, { message: 'lastName min is 4 characters' })
  .max(25, { message: 'lastName max is 25 characters' });

export const password = z
  .string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string'
  })
  .min(6, { message: 'short password, min 6 characters' })
  .max(32, { message: 'very long password, max 32 characters' });

export const passwordConfirm = z.string({
  required_error: 'password confirmation is required',
  invalid_type_error: 'password confirmation must be a string'
});

export const email = z
  .string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string'
  })
  .email('invalid email address');
