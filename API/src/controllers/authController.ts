import { Request, Response } from "express";
import md5 from "md5";
import jwt from "jsonwebtoken";

import { connect, jwtSecret } from "../database";

function tokenProfesor(id_profesor: any, correo: any) {
  return jwt.sign({ id: id_profesor, email: correo }, jwtSecret, {
    expiresIn: 86400,
  });
}

class AuthController {
  public async registrar(req: Request, res: Response): Promise<void> {
    if (
      !req.body.id_profesor ||
      !req.body.nombres ||
      !req.body.apellidos ||
      !req.body.correo ||
      !req.body.password
    ) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } else {
      const conn = await connect();

      const rows = await conn.query(
        `SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
      );
      const teacher = rows[0];

      if (teacher.toString() !== "") {
        res.json({ message: "El usuario ya existe" });
      } else {
        const { id_profesor, nombres, apellidos, correo, password } = req.body;
        const teacher = {
          id_profesor,
          nombres,
          apellidos,
          correo,
          password,
        };

        let passwordHash = md5(teacher.password + teacher.id_profesor);

        const result = await conn.query(
          `INSERT INTO profesor(id_profesor, nombres, apellidos, correo, password) VALUES("${teacher.id_profesor}","${teacher.nombres}","${teacher.apellidos}","${teacher.correo}","${passwordHash}")`
        );

        res.json({ message: "Registro exitoso" });
      }
    }
  }

  public async iniciarSesion(req: Request, res: Response): Promise<void> {
    if (!req.body.id_profesor || !req.body.password) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } 
    else {
      const conn = await connect();

      const rows = await conn.query(
        `SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
      );
      const teacherId: any = rows[0];

      if (teacherId.toString() !== "") {
        const compare = md5(req.body.password + req.body.id_profesor);

        const rows = await conn.query(
          `SELECT * FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
        );
        const teacherPass: any = rows[0];

        if (teacherPass[0].password === compare) {
          res.status(200).json({
            token: tokenProfesor(
              teacherPass[0].id_profesor,
              teacherPass[0].correo
            ),
          });
        } else {
          res.status(400).json({ message: "Contraseña Incorrecta" });
        }
      } 
      else {
        res.status(400).json({ message: "El usuario no existe" });
      }
    }
  }

  public cerrarSesion(req: Request, res: Response) {
    req.logOut;
  }
}

export const authController = new AuthController();
export default authController;
