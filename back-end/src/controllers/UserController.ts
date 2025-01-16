import { Request, Response } from "express";
import UsersRepository from "../repositories/UsersRepository";
import { hashPassword } from "../utils/hashPassword";
import JsonWebTokenService from "../authentication/JsonWebTokenService";
import { comparePasswordHash } from "../utils/comparePasswordHash";

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

  async login(request: Request, response: Response) {
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

    const userExists = await UsersRepository.findByEmail(email);

    if(!userExists){
      return response.status(400).json({ error: 'E-mail or password is incorrectly' });
    }

    const isPasswordValid = await comparePasswordHash(password, userExists.password);

    if(userExists && !isPasswordValid){
      return response.status(400).json({ error: 'E-mail or password is incorrectly' });
    }

    const jwtToken = JsonWebTokenService.generateToken(userExists.id);

    response.status(200).json({ token: jwtToken });
  }
}

export default new UserController();
