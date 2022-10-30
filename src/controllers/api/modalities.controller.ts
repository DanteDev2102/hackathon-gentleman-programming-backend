import { Request, Response } from 'express';
import axios, { AxiosPromise } from 'axios';
import config from '../../config';
import { BaseParamsSchema } from '../../schemas/api';
import { API_ENDPOINTS } from './apiEndpoints';

// PARAMS
// per_page
// 10
// Optional number of items per page. Maximum value is 100.
// page
// 1
// Optional page number. Default to 1.
// example
// https://www.getonbrd.com/api/v0/modalities?per_page=10&page=1

export const getModalities = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    BaseParamsSchema.parse(query);
    const allCompanies = await axios.get<AxiosPromise>(`${config.API_BASE_URL}${API_ENDPOINTS.MODALITIES}`, {
      params: query
    });
    const { data } = allCompanies;
    if (data) res.json(data);
  } catch (error) {
    res.json(error);
  }
};
