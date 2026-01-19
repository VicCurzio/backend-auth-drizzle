export const notFoundHandler = (req, res) => {
    res.status(404).json({ error: true, message: "Ruta de autenticación no encontrada" });
};
export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json({
        error: true,
        message: err.message || "Error interno en el servidor de Auth"
    });
};
//# sourceMappingURL=errorHandler.js.map