import { Request, Response } from "express";

class RegisterHandler {

  registerUser(req: Request, res: Response){
    res.send("FUNCIONA")
  }

}

export default new RegisterHandler();
