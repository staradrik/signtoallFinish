import { Request, Response } from "express";
import md5 from "md5";

import { connect } from "../database";

class ProfileController {
  public async profile(req: Request, res: Response): Promise<void> {
    // res.json({ text: "success" });
    // const games = await pool.query('SELECT * FROM games');
    res.send("Entraste!");
  }

  public async create(req: Request, res: Response): Promise<void> {
    const conn = await connect();
    const { id_profesor, nombres, apellidos, correo, password } = req.body;
    const teacher = {
      id_profesor,
      nombres,
      apellidos,
      correo,
      password,
    };

    let passwordHash = md5(teacher.password + teacher.correo);
    let prueba = md5(teacher.password);

    console.log(passwordHash);
    console.log(prueba);

    const result = await conn.query(
      `INSERT INTO profesor(id_profesor, nombres, apellidos, correo, password) VALUES("${teacher.id_profesor}","${teacher.nombres}","${teacher.apellidos}","${teacher.correo}","${passwordHash}")`
    );

    res.json({ message: "Registro exitoso" });
  }

  //     public async getOne(req: Request, res: Response): Promise<any> {
  //         const { id } = req.params;
  //         const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
  //         console.log(games.length);
  //         if (games.length > 0) {
  //             return res.json(games[0]);
  //         }
  //         res.status(404).json({ text: "The game doesn't exits" });
  //     }

  public async update(req: Request, res: Response): Promise<void> {
    res.json({ text: "update " + req.params.id });

    // const { id } = req.params;
    // const oldGame = req.body;
    // await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
    // res.json({ message: "The game was Updated" });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    res.json({ text: "delete " + req.params.id });

    // const { id } = req.params;
    // await pool.query('DELETE FROM games WHERE id = ?', [id]);
    // res.json({ message: "The game was deleted" });
  }
}

const profileController = new ProfileController();
export default profileController;
