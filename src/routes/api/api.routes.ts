import { Router } from 'express';
import * as controllers from '../../controllers/api';
import { API_ENDPOINTS } from '../../controllers/api';
import { authorization } from '../../middlewares';

const api = Router();

api.get(API_ENDPOINTS.CATEGORIES, authorization, controllers.getCategories);
api.get(API_ENDPOINTS.COMPANIES, authorization, controllers.getCompanies);
api.get(API_ENDPOINTS.SEARCH, authorization, controllers.getSearchJobs);
api.get(API_ENDPOINTS.TAGS, authorization, controllers.getTags);
api.get(API_ENDPOINTS.MODALITIES, authorization, controllers.getModalities);
api.get(API_ENDPOINTS.SENIORITIES, controllers.getSeniorities);
api.get(API_ENDPOINTS.CITIES, authorization, controllers.getCities);
api.get(API_ENDPOINTS.PERKS, authorization, controllers.getPerks);

export default api;
