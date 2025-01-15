import express, { Express } from 'express'
import registerRoutes from './routes/register/routes';

const app: Express = express()
const port = process.env.SERVER_PORT || 3000;

// Middlewares
app.use(express.json());

// Adding routes
app.use(registerRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})
