import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

// Middlewares obligatorios
app.use(cors());
app.use(express.json());

// Rutas de Autenticación
app.use('/auth', authRoutes);

// Manejo de errores (al final)
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor de Autenticación corriendo en http://localhost:${PORT}`);
});