import { z } from 'zod';
import { email, password, firstName, lastName, passwordConfirm } from './values.schema';

export const RegisterUserSchema = z
  .object({
    body: z.object({ firstName, lastName, password, passwordConfirm, email }).strict()
  })
  .refine(({ body }) => body.password === body.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm']
  });

export const LoginUserSchema = z.object({
  body: z.object({ email, password }).strict()
});
