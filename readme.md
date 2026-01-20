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

### Variables de Entorno (.env)
- PORT=3001
- DATABASE_URL=postgresql://postgres.fqnktwmdcewmarldihfv:w8HgJJU3uxatAH1b@aws-1-us-east-2.pooler.supabase.com:5432/postgres
- JWT_SECRET=secret_key

## 🛠️ Comandos de Migración (Drizzle)
Para mantener la base de datos actualizada, este proyecto utiliza `drizzle-kit`:
1. Generar migración: `npx drizzle-kit generate`
2. Aplicar cambios: `npx drizzle-kit push`

## Ejecución
- Desarrollo: `npm run dev`
- Producción: `npm start` (Ejecuta el código compilado en /dist)

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