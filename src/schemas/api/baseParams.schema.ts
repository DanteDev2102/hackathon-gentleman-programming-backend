import { z } from 'zod';

export const BaseParamsSchema = z.object({
  // Optional number of items per page. Maximum value is 100.
  per_page: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().positive().min(1).max(100)).optional(),

  // Optional page number. Default to 1.
  page: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().positive().min(1)).optional()
});

export type TBaseParamsSchema = z.infer<typeof BaseParamsSchema>;
