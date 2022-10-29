import { Router } from 'express';
import * as controllers from '../../controllers';

const jobs = Router();

jobs.get('/', controllers.getJobsPerPage);

export default jobs;
