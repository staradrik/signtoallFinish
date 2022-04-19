import { Request, Response } from "express";
import md5 from "md5";
import jwt from "jsonwebtoken";

import { connect, jwtSecret } from "../database";

function tokenProfesor(id_profesor: any, correo: any) {
  return jwt.sign({ id: id_profesor, email: correo }, jwtSecret, {
    expiresIn: 86400,
  });
}

function tokenEstudiante(id_estudiante: any, correo: any) {
  return jwt.sign({ id: id_estudiante, email: correo }, jwtSecret, {
    expiresIn: 86400,
  });
}

class AuthController {
  public async registrarP(req: Request, res: Response): Promise<void> {
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

  public async iniciarSesionP(req: Request, res: Response): Promise<void> {
    if (!req.body.id_profesor || !req.body.password) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } else {
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
          res.status(400).json({ message: "Contraseña incorrecta" });
        }
      } else {
        res.status(400).json({ message: "El usuario no existe" });
      }
    }
  }

  public async registrarE(req: Request, res: Response): Promise<void> {
    if (
      !req.body.id_estudiante ||
      !req.body.nombres ||
      !req.body.apellidos ||
      !req.body.correo ||
      !req.body.id_curso ||
      !req.body.password
    ) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } else {
      const conn = await connect();

      const rows = await conn.query(
        `SELECT id_estudiante FROM estudiante WHERE id_estudiante = ${req.body.id_estudiante}`
      );
      const student = rows[0];

      if (student.toString() !== "") {
        res.json({ message: "El usuario ya existe" });
      } else {
        const { id_estudiante, nombres, apellidos, correo, id_curso, password } =
          req.body;
        const student = {
          id_estudiante,
          nombres,
          apellidos,
          correo,
          id_curso,
          password,
        };

        let passwordHash = md5(student.password + student.id_estudiante);

        const rows = await conn.query(
          `SELECT * FROM curso WHERE id_curso = ${req.body.id_curso}`
        );

        const courseId: any = rows[0];

        if (courseId.toString() === '') {
          res.status(400).json({ msg: 'El curso no existe' });
        } else {
          const result = await conn.query(
            `INSERT INTO estudiante(id_estudiante, nombres, apellidos, correo, password, curso_id_curso) VALUES("${student.id_estudiante}","${student.nombres}","${student.apellidos}","${student.correo}","${passwordHash}","${student.id_curso}")`
          );

          res.json({ message: 'Registro Exitoso' });
        }
      }
    }
  }

  public async iniciarSesionE(req: Request, res: Response): Promise<void> {
    if (!req.body.id_estudiante || !req.body.password) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } else {
      const conn = await connect();

      const rows = await conn.query(
        `SELECT id_estudiante FROM estudiante WHERE id_estudiante = ${req.body.id_estudiante}`
      );
      const studentId: any = rows[0];

      if (studentId.toString() !== "") {
        const compare = md5(req.body.password + req.body.id_estudiante);

        const rows = await conn.query(
          `SELECT * FROM estudiante WHERE id_estudiante = ${req.body.id_estudiante}`
        );
        const studentPass: any = rows[0];

        if (studentPass[0].password === compare) {
          res.status(200).json({
            token: tokenEstudiante(
              studentPass[0].id_estudiante,
              studentPass[0].correo
            ),
          });
        } else {
          res.status(400).json({ message: "Contraseña incorrecta" });
        }
      } else {
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
