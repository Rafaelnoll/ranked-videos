import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import { hashPassword } from "../utils/hashPassword";

class UserController {
  async store(request: Request, response: Response) {
    const {
      name,
      email,
      password,
    } = request.body;

    if (!name) {
      response.status(400).json({ error: 'name is required' });
      return;
    }

    if (!email) {
      response.status(400).json({ error: 'email is required' });
      return;
    }

    if (!password) {
      response.status(400).json({ error: 'password is required' });
      return;
    }

    const userAlreadyCreated = await UsersRepository.findByEmail(email);

    if(userAlreadyCreated){
      return response.status(400).json({ error: 'E-mail already in use' });
    }

    const hashOfPassword = await hashPassword(password);

    const userCreated = await UsersRepository.create({
      name,
      password: hashOfPassword,
      email
    });

    if (userCreated) {
      response.status(201).json(userCreated);
      return;
    }

    response.status(500).json({ error: 'Error on create User' });
  }
}

export default new UserController();
