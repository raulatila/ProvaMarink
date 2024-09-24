import { Request, Response } from 'express';
import * as service from '../services/contratante-service';

export const getAll = async (req: Request, res: Response) => {
  const contratantes = await service.getAllContratantes();
  res.json(contratantes);
};

export const getById = async (req: Request, res: Response) => {
  const contratante = await service.getContratanteById(req.params.id);
  if (!contratante) return res.status(404).send('Contratante não encontrado');
  res.json(contratante);
};

export const create = async (req: Request, res: Response) => {
  const contratante = await service.createContratante(req.body);
  res.status(201).json(contratante);
};

export const update = async (req: Request, res: Response) => {
  const contratante = await service.updateContratante(req.params.id, req.body);
  if (!contratante) return res.status(404).send('Contratante não encontrado');
  res.json(contratante);
};

export const remove = async (req: Request, res: Response) => {
  await service.deleteContratante(req.params.id);
  res.status(204).send();
};
