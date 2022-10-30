import { Router } from 'express';
import * as controllers from '../../controllers/api';

const api = Router();

api.get('/categories', controllers.getCategories);
api.get('/companies', controllers.getCompanies);
api.get('/search', controllers.searchJobs);
api.get('/cities', controllers.getCities);
api.get('/', controllers.getJobsPerPage);

export default api;
