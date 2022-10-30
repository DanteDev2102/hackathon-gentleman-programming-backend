import { z } from 'zod';
import { BaseParamsSchema } from './baseParams.schema';

// PARAMS
// query
// Ruby+on+Rails
// Query used to find jobs. It accepts or, and or double quotes meaning the words have to be strictly in that order. Oh by the way, It is language agnostic, no no really, try: pet friendly, or pemiten mascotas 🐶.

// per_page
// 2
// Optional number of items per page. Maximum value is 100.

// page
// 1
// Optional page number. Default to 1.

// expand
// ["company"]
// See Expanding Responses

// country_code
// MX
// Optional. Code of the country where these jobs are published.

// remote
// true
// Optional. Bring fully remote jobs.

// FUll example
// https://www.getonbrd.com/api/v0/search/jobs?query=Ruby+on+Rails&per_page=2&page=1&expand=["company"]&country_code=MX&remote=true

export const SearchParamsSchema = z
  .object({
    query: z.string().optional(),
    expand: z.array(z.string()).optional(),
    country_code: z.string().optional(),
    remote: z.string().optional()
  })
  .merge(BaseParamsSchema);

export type TSearchParamsSchema = z.infer<typeof SearchParamsSchema>;
