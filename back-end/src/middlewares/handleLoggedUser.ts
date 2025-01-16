import { NextFunction, Request, Response } from "express";
import JsonWebTokenService from "../authentication/JsonWebTokenService";

export function handleLoggedUser(request: Request, response: Response, next: NextFunction){
  const tokenHeader = request.headers.authorization;

  if(!tokenHeader){
    return response.status(401).json({ error: "You don't have permission to access this resource." })
  }

  const token = tokenHeader.replace('Bearer ', '');
  const tokenData = JsonWebTokenService.verifyToken(token);

  if(!tokenData?.userId){
    return response.status(401).json({ error: "Invalid token or your token has expired." })
  }

  request.userId = tokenData.userId
  next();
}
