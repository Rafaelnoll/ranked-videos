import express, { Express } from 'express'
import 'express-async-errors';
import 'dotenv/config'
import './startup';

import routes from './routes';
import { handleErrors } from './middlewares/handleErrors';
import path from 'path';

const app: Express = express()
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join('uploads')));
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
