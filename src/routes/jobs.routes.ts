import { Router } from 'express';
import * as controllers from '@/controllers';
export const jobs = Router();

jobs.get('/jobs/:page', controllers.getJobsPerPage);
