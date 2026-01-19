import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';
export const users = pgTable('usuarios', {
    id: serial('id').primaryKey(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: text('password').notNull(),
    nombre: varchar('nombre', { length: 100 }).notNull(),
    rol: varchar('rol', { length: 50 }).notNull().default('user'),
    fecha_creacion: timestamp('fecha_creacion').defaultNow(),
});
//# sourceMappingURL=schema.js.map