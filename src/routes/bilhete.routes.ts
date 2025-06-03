import { Router } from 'express';
import BilheteController from '../controllers/bilhete.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const controller = new BilheteController();

// Todas as rotas protegidas
router.use(authMiddleware);
//router.get('/', controller.listar);
router.post('/', controller.comprar);
router.get('/:id', controller.obterPorId);

export default router;