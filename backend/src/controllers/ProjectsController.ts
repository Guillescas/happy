/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import projectView from '../views/projects_view';

import Project from '../models/Project';

export default {
  async index(request: Request, response: Response) {
    const projectsRepository = getRepository(Project);

    const projects = await projectsRepository.find({
      relations: ['images'],
    });

    return response.json(projectView.renderMany(projects));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projectsRepository = getRepository(Project);

    const project = await projectsRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(projectView.render(project));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      category,
      whatsapp,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const projectsRepository = getRepository(Project);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const data = {
      name,
      category,
      whatsapp,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      category: Yup.string().required(),
      whatsapp: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const project = projectsRepository.create(data);

    await projectsRepository.save(project);

    response.status(201).json(project);
  },

  async showByCategory(request: Request, response: Response) {
    const { category } = request.params;

    const projectsRepository = getRepository(Project);

    const projects = await projectsRepository.find({
      where: { category },
      relations: ['images'],
    });

    return response.json(projectView.renderMany(projects));
  },
};
