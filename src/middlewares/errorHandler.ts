import type { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (req: Request, res: Response) => {
    res.status(404).json({ error: true, message: "Ruta de autenticación no encontrada" });
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message || "Error interno en el servidor de Auth"
    });
};