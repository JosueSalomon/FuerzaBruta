import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//rutass
import userRouter from './routes/user.route'

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/user', userRouter);
//Servidor Raiz.
app.get('/', (req: Request, res: Response) => {
    res.send('Root server is on SIUUUUUUUUUUUU');
});

//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});