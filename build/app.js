"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const equiposRoutes_1 = __importDefault(require("./routes/equiposRoutes"));
const tipoEquiposRoute_1 = __importDefault(require("./routes/tipoEquiposRoute"));
const cuentaDantesRoutes_1 = __importDefault(require("./routes/cuentaDantesRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const mantenimientosRoutes_1 = __importDefault(require("./routes/mantenimientosRoutes"));
const estadosRoutes_1 = __importDefault(require("./routes/estadosRoutes"));
const areasRoutes_1 = __importDefault(require("./routes/areasRoutes"));
const chequeosRoutes_1 = __importDefault(require("./routes/chequeosRoutes"));
const app = (0, express_1.default)();
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    console.log('Hola mundo');
    res.send('Hola mundo');
});
//Rutas de la APP
app.use("/equipos", equiposRoutes_1.default);
app.use("/tipoEquipos", tipoEquiposRoute_1.default);
app.use("/cuentadantes", cuentaDantesRoutes_1.default);
app.use('/auth', authRoutes_1.default);
app.use('/roles', rolesRoutes_1.default);
app.use('/usuarios', usuariosRoutes_1.default);
app.use('/mantenimientos', mantenimientosRoutes_1.default);
app.use('/estados', estadosRoutes_1.default);
app.use('/areas', areasRoutes_1.default);
app.use('/chequeos', chequeosRoutes_1.default);
exports.default = app;
