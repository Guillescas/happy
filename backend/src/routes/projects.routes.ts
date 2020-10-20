import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import ProjectController from '../controllers/ProjectsController';

const projectsRouter = Router();
const upload = multer(uploadConfig);

projectsRouter.get('/', ProjectController.index);
projectsRouter.get('/:id', ProjectController.show);
projectsRouter.get('/list/:category', ProjectController.showByCategory);
projectsRouter.post('/', upload.array('images'), ProjectController.create);

export default projectsRouter;
