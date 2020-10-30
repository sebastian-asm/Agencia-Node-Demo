import express from 'express';

import {
  paginaInicio,
  paginaNosotros,
  paginaOpiniones,
  paginaViajes,
  paginaDetallesViaje,
} from '../controllers/paginas.controller.js';
import { guardarOpiniones } from '../controllers/opiniones.controller.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetallesViaje);
router.get('/opiniones', paginaOpiniones);
router.post('/opiniones', guardarOpiniones);

export default router;
