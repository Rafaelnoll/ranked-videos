import express, { Express } from 'express'
import routes from './routes';
import 'express-async-errors';
import { handleErrors } from './middlewares/handleErrors';

const app: Express = express()
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(express.json());
app.use(routes);
app.use(handleErrors);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
