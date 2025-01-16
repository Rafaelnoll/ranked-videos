import { NextFunction, Request, Response } from "express";

export function handleErrors(error: Error, request: Request, response: Response, next: NextFunction){
  console.error(error);
  response.status(500).json({ error: 'Internal server error' })
}
