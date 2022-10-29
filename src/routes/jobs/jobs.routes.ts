import { Router } from 'express';
import * as controllers from '../../controllers';

const jobs = Router();

jobs.get('/', controllers.getJobsPerPage);
jobs.get('/search', controllers.searchJobs);

export default jobs;
