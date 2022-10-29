import { Response, Request } from 'express';
import axios, { AxiosPromise } from 'axios';

export const getJobsPerPage = async (req: Request, res: Response) => {
  try {
    const { category } = req.body;
    const { query } = req;
    const jobsPerPage = await axios.get<AxiosPromise>(`https://www.getonbrd.com/api/v0/categories/${category}/jobs?`, {
      params: query
    });
    const result = await jobsPerPage.data;
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const searchJobs = async (req: Request, res: Response) => {
  try {
    const { query } = req;
    const jobsSearch = await axios.get(`https://www.getonbrd.com/api/v0/search/jobs?`, {
      params: query
    });
    const result = await jobsSearch.data;
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
