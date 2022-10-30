import { Response, Request } from 'express';
import axios, { AxiosPromise } from 'axios';
import { BaseParamsSchema } from '../../schemas';
import config from '../../config';

export const getJobsPerPage = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    const { query } = req;
    BaseParamsSchema.parse(query);
    const jobsPerPage = await axios.get<AxiosPromise>(`${config.API_BASE_URL}/categories/${category}/jobs?`, {
      params: query
    });
    const { data } = jobsPerPage;
    if (data) res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
