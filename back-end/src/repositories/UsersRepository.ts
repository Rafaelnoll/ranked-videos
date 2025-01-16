import { IRepository } from "../../interfaces/IRepository";
import { IUser } from "../../interfaces/IUser";
import { query } from "../database";

class UsersRepository implements IRepository<IUser> {
  update() {
    throw new Error("Method not implemented.");
  }
  findAll() {
    throw new Error("Method not implemented.");
  }
  findOne() {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string) {
    const [row] = await query(`
      SELECT * FROM users
      WHERE email = $1
    `, [email]);
    return row;
  }

  async create({ name, password, email }: IUser) {
    const [row] = await query(`
      INSERT INTO users(name, password, email)
      VALUES($1, $2, $3)
      RETURNING *;
    `, [name, password, email]);

    return row;
  }
  delete() {
    throw new Error("Method not implemented.");
  }

}

export default new UsersRepository();
