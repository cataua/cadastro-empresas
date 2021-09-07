import { Router } from 'express';
import { Company } from '../modules/Company/Company.controller.js';

const api = Router();

api.use(Company);

export default api;

export { api }