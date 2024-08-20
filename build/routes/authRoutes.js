"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const stateValidatorMiddleware_1 = __importDefault(require("../middlewares/stateValidatorMiddleware"));
const router = express_1.default.Router();
router.post('/registro', authController_1.default.registrarUsuario);
/**
 *  POST
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *               - usuarios
 *          sumary: "Registrar equipos"
 *          description: Registro de equipos
 *          requestBody:
 *                  content:
 *                      application/json:
 *                          shema:
 *                              $ref: "#/components/shemas/equipo"
 *          responses:
 *              '201':
 *                  descripcion: Equipo creado correctamente
 *              '401':
 *                  descripcion: No tiene permiso para acceder a esta ruta
 *             security:
 *               - beareaeAuth: [ ]

 */
router.post('/login', (0, stateValidatorMiddleware_1.default)(true), authController_1.default.loginUsuario);
router.get('/ruta-protegida', authController_1.default.saludar);
exports.default = router;
