import { Contratante, IContratante } from '../models/contratante-model';

export const findAll = async () => {
  return await Contratante.find();
};

export const findById = async (id: string) => {
  return await Contratante.findById(id);
};

export const create = async (data: IContratante) => {
  return await Contratante.create(data);
};

export const update = async (id: string, data: Partial<IContratante>) => {
  if (data.email) {
    //  IContratante ou null
    const existingContratante: IContratante | null = await Contratante.findOne({ email: data.email });

    // Verifica  o ID não é o mesmo do atual
    if (existingContratante && existingContratante._id && existingContratante._id.toString() !== id) {
      throw new Error(`O email ${data.email} já está em uso por outro contratante.`);
    }
  }

  return await Contratante.findByIdAndUpdate(id, data, { new: true });
};

export const remove = async (id: string) => {
  return await Contratante.findByIdAndDelete(id);
};
