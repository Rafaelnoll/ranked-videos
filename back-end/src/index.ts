import express, { Express } from 'express'
import 'express-async-errors';
import 'dotenv/config'
import './startup';
import cors from 'cors';

import routes from './routes';
import { handleErrors } from './middlewares/handleErrors';
import path from 'path';
import { handleLoggedUser } from './middlewares/handleLoggedUser';

const app: Express = express()
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(cors())
app.use(express.json());
app.use(routes);
app.use('/uploads', handleLoggedUser, express.static(path.join('uploads')));
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
