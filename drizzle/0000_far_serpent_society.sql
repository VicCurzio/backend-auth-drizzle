CREATE TABLE "usuarios" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" text NOT NULL,
	"nombre" varchar(100) NOT NULL,
	"rol" varchar(50) DEFAULT 'user' NOT NULL,
	"fecha_creacion" timestamp DEFAULT now(),
	CONSTRAINT "usuarios_email_unique" UNIQUE("email")
);
