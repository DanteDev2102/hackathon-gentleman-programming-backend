import { Response, Request, RequestHandler } from 'express';
import axios, { AxiosPromise } from 'axios';
import config from '../../config';
import { BaseParamsSchema } from '../../schemas/api';
import { API_ENDPOINTS } from './apiEndpoints';

// The Category object
// A category has the following attributes:
//     name: The publicly displayed category name, in English.
//     dimension: An untranslated category identifier.
// PARAMS
// per_page
// 10
// Optional number of items per page. Maximum value is 100.
// page
// 1
// Optional page number. Default to 1.
// example
// https://www.getonbrd.com/api/v0/categories?per_page=10&page=1

export const getCategories: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    BaseParamsSchema.parse(query);
    const allCategories = await axios.get<AxiosPromise>(`${config.API_BASE_URL}${API_ENDPOINTS.CATEGORIES}`, {
      params: query
    });
    const result = allCategories.data;
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};
