import express, { Request, Response, NextFunction } from 'express';
import connectDB from './shared/connection';  // Importação corrigida para default
import { findAll, findById, create, update, remove } from './repositories/contratante-repository';
import contratanteRoutes from './routes/contratante-routes';

const app = express();

// Conectando ao MongoDB
connectDB().then(() => {
  console.log('Conexão com MongoDB estabelecida com sucesso');
}).catch((error: Error) => {
  console.error('Erro ao conectar com MongoDB:', error);
  process.exit(1);  // Sai da aplicação se a conexão com o MongoDB falhar
});

// Middleware para trabalhar com JSON
app.use(express.json());

// Definindo rotas
app.use('/contratantes', contratanteRoutes);

// Configurando a porta do servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Tratamento de rota não encontrada (404)
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Rota não encontrada!' });
});

// Tratamento genérico de

