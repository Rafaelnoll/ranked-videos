import { IRepository } from "../../interfaces/IRepository";
import { IVideo } from "../../interfaces/IVideo";
import { query } from "../database";

class VideosRepository implements IRepository<IVideo> {
  update() {
    throw new Error("Method not implemented.");
  }
  async findAll() {
    const rows = await query(`SELECT * from videos`);

    return rows;
  }
  findOne() {
    throw new Error("Method not implemented.");
  }

  async create({ title, uploaded_by, path, votes }: Partial<IVideo>) {
    const [row] = await query(`
      INSERT INTO videos(title, uploaded_by, path, votes)
      VALUES($1, $2, $3, $4)
      RETURNING *;
    `, [title, uploaded_by, path, votes]);

    return row;
  }
  delete() {
    throw new Error("Method not implemented.");
  }

}

export default new VideosRepository();
