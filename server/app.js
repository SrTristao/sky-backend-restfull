import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import handleError from './middlewares/handleError';
import error404 from './middlewares/error404';
import swaggerConfig from './swaggerConfig';
import routes from './routes';
import cors from './middlewares/cors';
import connect from './mongoose';

require('dotenv').config();

const app = express();
const swaggerSpec = swaggerJSDoc(swaggerConfig);
const connection = connect();

app.use(cors);
app.use(helmet());

if (process.env.ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json({
  limit: '50mb',
  type: () => true
}));

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(error404);
app.use(handleError);

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  app.listen(process.env.PORT, () => console.log(`server started: PORT: ${process.env.PORT} | ENV: ${process.env.ENV}`));
}

module.exports = app;