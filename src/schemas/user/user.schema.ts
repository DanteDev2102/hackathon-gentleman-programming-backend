import { z } from 'zod';
import { email, password, firstName, lastName, passwordConfirm } from './values.schema';

export const CreateUserSchema = z
  .object({
    body: z.object({ firstName, lastName, password, passwordConfirm, email }).strict()
  })
  .refine(({ body }) => body.password === body.passwordConfirm, {
    message: "Passwords don't match",
    path: ['passwordConfirm']
  });
