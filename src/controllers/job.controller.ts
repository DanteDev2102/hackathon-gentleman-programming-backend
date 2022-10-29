import { Response, Request } from 'express';
import axios, { AxiosPromise } from 'axios';

export const getJobsPerPage = async (req: Request, res: Response) => {
  try {
    const { page, category } = req.body;
    const jobsPerPage = await axios.get<AxiosPromise>(
      `https://www.getonbrd.com/api/v0/categories/${category}/jobs?per_page=10&page=${page}&expand=["company"]`
    );
    const result = await jobsPerPage.data;
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
