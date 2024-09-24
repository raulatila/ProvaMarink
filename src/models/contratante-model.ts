import { Schema, model, Document } from 'mongoose';

export interface IContratante extends Document {
  nome: string;
  email: string;
  telefone: string;
}

const contratanteSchema = new Schema<IContratante>({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true }
});

export const Contratante = model<IContratante>('Contratante', contratanteSchema);
