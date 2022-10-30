import { Response, Request } from 'express';
import axios from 'axios';
import config from '../../config';
import { SearchParamsSchema } from '../../schemas/api';
import { API_ENDPOINTS } from './apiEndpoints';

export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    SearchParamsSchema.parse(query);
    const jobsSearch = await axios.get(`${config.API_BASE_URL}${API_ENDPOINTS.SEARCH}`, {
      params: query
    });
    const result = await jobsSearch.data;
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
