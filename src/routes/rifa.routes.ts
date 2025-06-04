import { Router } from 'express';
import RifaController from '../controllers/rifa.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const controller = new RifaController();

// Rotas públicas
router.get('/', controller.listar);
router.get('/:id', controller.obterPorId);
router.get('/:id/bilhetes', controller.listarBilhetes);

// Rotas protegidas
router.use(authMiddleware);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);

export default router;