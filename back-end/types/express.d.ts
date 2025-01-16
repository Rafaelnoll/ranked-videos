import "express-serve-static-core";

declare module "express-serve-static-core" {
  interface Request {
    userId?: string; // Adiciona o campo userId como opcional
  }
}
