import { Router } from 'express';
import * as controllers from '../../controllers/api';
import { API_ENDPOINTS } from '../../controllers/api';

const api = Router();

api.get(API_ENDPOINTS.CATEGORIES, controllers.getCategories);
api.get(API_ENDPOINTS.COMPANIES, controllers.getCompanies);
api.get(API_ENDPOINTS.SEARCH, controllers.getSearchJobs);
api.get(API_ENDPOINTS.TAGS, controllers.getTags);
api.get(API_ENDPOINTS.MODALITIES, controllers.getModalities);
api.get(API_ENDPOINTS.SENIORITIES, controllers.getSeniorities);
api.get(API_ENDPOINTS.CITIES, controllers.getCities);
api.get(API_ENDPOINTS.PERKS, controllers.getPerks);

export default api;
