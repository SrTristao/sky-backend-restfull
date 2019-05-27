import * as path from 'path';

const swaggerConfig = () => {
  const projectRootPath = path.resolve(__dirname);

  const swaggerDefinition = {
    swagger: '2.0',
    info: {
      title: 'Deepwater Medicos Backend Swagger API',
      version: '1.0.0',
      description: 'Endpoints documentation',
    },
    host: process.env.HOST,
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        in: 'header',
      },
    },
  };

  const options = {
    swaggerDefinition,
    apis: [`${projectRootPath}/public/**/*.js`, `${projectRootPath}/private/**/*.js`],
  };

  return options;
};

module.exports = swaggerConfig();
