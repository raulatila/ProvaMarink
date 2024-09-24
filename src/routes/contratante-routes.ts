import { Router } from 'express';
import { findAll, findById, create, update, remove } from '../repositories/contratante-repository';

const router = Router();

router.get('/', async (req, res) => {
  const contratantes = await findAll();
  res.json(contratantes);
});

router.get('/:id', async (req, res) => {
  const contratante = await findById(req.params.id);
  if (!contratante) {
    return res.status(404).json({ message: 'Contratante não encontrado' });
  }
  res.json(contratante);
});

router.post('/', async (req, res) => {
  try {
    const newContratante = await create(req.body);
    res.status(201).json(newContratante);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar contratante', error: (error as Error).message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedContratante = await update(req.params.id, req.body);
    res.json(updatedContratante);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar contratante', error: (error as Error).message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await remove(id);
    res.status(200).json({ message: 'Contratante excluído com sucesso' });
  } catch (error: any) { // Isso pode ser ajustado para `unknown` se você quiser mais segurança
    console.error('Erro ao excluir contratante:', error); // Log do erro
    res.status(400).json({ message: 'Erro ao excluir contratante', error: error.message });
  }

});




export default router;
