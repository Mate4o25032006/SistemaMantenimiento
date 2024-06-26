import { DataSource } from "typeorm";
import { Equipo } from "../models/equipoModel";
import { TipoEquipo } from "../models/tipoEquipoModel";
import { Propietario } from "../models/propietariosModel";
import { IntegranteEquipo } from "../models/integranteEquipoModel";
import { Mantenimiento } from "../models/mantenimientoModel";
import { Insumo } from "../models/insumoModel";
import { Usuario } from "../models/usuarioModel";
import { Rol } from "../models/rolModel";
import { Estado } from "../models/estadoModel";
import { Chequeo } from "../models/chequeoModel";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "mantenimiento",
    logging: true,
    entities: [Equipo, TipoEquipo, Propietario, IntegranteEquipo, Mantenimiento, Insumo, Usuario, Rol, Estado, Chequeo],
    synchronize: false
})

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });