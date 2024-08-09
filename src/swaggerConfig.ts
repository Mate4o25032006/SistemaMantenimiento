import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documentación Automática',
        version: '1.0.0',
        description: 'Documentación generada automáticamente con Swagger',
    },
    servers: [
        {
            url: 'https://mantenimiento-front.vercel.app',
            description: 'Servidor',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerDefinition };
