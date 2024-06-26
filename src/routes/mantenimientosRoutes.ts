import express from 'express';
import mantenimientosController from '../controllers/mantenimientosController';
import verificarToken from '../middlewares/authMiddleware';
import validarRol from '../middlewares/rolValidatorMiddleware';

const router = express.Router();

router.get('/', verificarToken, validarRol(['ADMINISTRADOR', 'RESPONSABLE']), mantenimientosController.listarMantenimientos);

router.post('/', verificarToken, validarRol(['ADMINISTRADOR']), mantenimientosController.agregarMantenimiento);

router.route("/:idMantenimiento")
    .put(verificarToken, validarRol(['ADMINISTRADOR', 'RESPONSABLE']), mantenimientosController.modificarMantenimiento)

export default router