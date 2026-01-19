import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta';
export const register = async (req, res, next) => {
    try {
        const { email, password, nombre } = req.body;
        // Validaciones obligatorias
        if (!email || !password || !nombre) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }
        // Verificar si el usuario ya existe
        const [existingUser] = await db.select().from(users).where(eq(users.email, email));
        if (existingUser) {
            return res.status(409).json({ error: "El email ya está registrado" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.insert(users).values({
            email,
            nombre,
            password: hashedPassword,
            rol: 'user'
        });
        res.status(201).json({ message: "Usuario registrado con éxito" });
    }
    catch (error) {
        next(error); // Activa tu errorHandler.ts
    }
};
// --- LOGIN ---
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const [user] = await db.select().from(users).where(eq(users.email, email));
        if (!user) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }
        const token = jwt.sign({ id: user.id, email: user.email, rol: user.rol }, JWT_SECRET, { expiresIn: '24h' });
        res.json({
            message: "Login exitoso",
            token,
            user: { id: user.id, nombre: user.nombre, email: user.email }
        });
    }
    catch (error) {
        next(error); // <--- ESTO activa tu errorHandler.ts
    }
};
// --- GET ME ---
export const getMe = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: "No autorizado, falta el token" });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ error: "Formato de token inválido" });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        const [user] = await db.select().from(users).where(eq(users.id, decoded.id));
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const { password, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    }
    catch (error) {
        res.status(401).json({ error: "Token inválido o expirado" });
    }
};
//# sourceMappingURL=authController.js.map