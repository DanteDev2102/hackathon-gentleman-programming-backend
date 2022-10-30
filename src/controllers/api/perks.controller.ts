import { Request, Response } from 'express';
import axios, { AxiosPromise } from 'axios';
import config from '../../config';
import { BaseParamsSchema } from '../../schemas/api';
import { API_ENDPOINTS } from './apiEndpoints';

// PARAMS
// No params
// example
// https://www.getonbrd.com/api/v0/perks

export const getPerks = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    BaseParamsSchema.parse(query);
    const allPerks = await axios.get<AxiosPromise>(`${config.API_BASE_URL}${API_ENDPOINTS.MODALITIES}`, {
      params: query
    });
    const { data } = allPerks;
    if (data) res.json(data);
  } catch (error) {
    res.json(error);
  }
};
