# Microservicio de Autenticación (Drizzle ORM + TS)

Este servicio gestiona el registro y login de usuarios, emitiendo tokens JWT para el dashboard.

## Tecnologías
- Node.js & Express
- TypeScript
- Drizzle ORM
- PostgreSQL

## Instalación
1. `npm install`
2. Configurar `.env` con `DATABASE_URL` y `JWT_SECRET`.
3. Ejecutar migraciones: `npx drizzle-kit generate` seguido de `npx drizzle-kit push`.

## Endpoints
- `POST /auth/register`: Registro de nuevos usuarios.
- `POST /auth/login`: Obtención de JWT.
- `GET /auth/me`: Verificación de perfil.

## Pruebas con Postman
En la carpeta `/postman` encontrarás el archivo `Auth - Drizzle.postman_collection.json`.
1. Impórtalo en Postman.
2. Usa `POST /register` para crear un usuario.
3. Usa `POST /login` para obtener tu token JWT.
4. Usa el token en el `GET /me` (Bearer Token) para validar tu sesión.

### Variables de Entorno (.env)
PORT=3001
DATABASE_URL=postgres://postgres:admin123@localhost:5432/dashboard_finanzas
JWT_SECRET=secret_key