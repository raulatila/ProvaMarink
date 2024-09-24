import * as repository from '../repositories/contratante-repository';

export const getAllContratantes = async () => {
  return await repository.findAll();
};

export const getContratanteById = async (id: string) => {
  return await repository.findById(id);
};

export const createContratante = async (data: any) => {
  return await repository.create(data);
};

export const updateContratante = async (id: string, data: any) => {
  return await repository.update(id, data);
};

export const deleteContratante = async (id: string) => {
  return await repository.remove(id);
};
