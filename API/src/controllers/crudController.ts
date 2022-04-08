import { Request, Response } from "express";
import { connect } from "../database";

class CrudController {
  public async list(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const student = await conn.query("SELECT * FROM estudiante");
    res.json(student);
  }

  // public async getOne(req: Request, res: Response): Promise<any> {
  //   const { id } = req.params;
  //   const games = await pool.query("SELECT * FROM games WHERE id = ?", [id]);
  //   console.log(games.length);
  //   if (games.length > 0) {
  //     return res.json(games[0]);
  //   }
  //   res.status(404).json({ text: "The game doesn't exits" });
  // }

  public async create(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const result = await conn.query("INSERT INTO estudiante set ?", [req.body]);
    res.json({ message: "Estudiante añadido con exito" });
  }

  public async update(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const { id_estudiante } = req.params;
    await conn.query("UPDATE estudiante set ? WHERE id_estudiante = ?", [
      req.body,
      id_estudiante,
    ]);
    res.json({ message: "Los datos han sido actualizados" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const { id_estudiante } = req.params;
    await conn.query("DELETE FROM estudiante WHERE id_estudiante = ?", [
      id_estudiante,
    ]);
    res.json({ message: "El estudiante ha sido eliminado de la lista" });
  }
}

export const crudController = new CrudController();
export default crudController;
