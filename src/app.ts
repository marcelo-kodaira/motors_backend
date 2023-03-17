import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

import { appRoutes } from './routes';
import handleErrorMiddleware from './middlewares/handleError.midleware';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
