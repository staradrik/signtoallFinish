import { Request, Response } from 'express';
import md5 from 'md5';
import { connect } from '../database';

class CrudController {
  public async list(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const rows = await conn.query(
      `SELECT * FROM estudiante`
    );

    const student: any = rows[0];
    
    res.json(student);
  }

  public async listStudent(req: Request, res: Response): Promise<any> {
    const conn = await connect();
    const {id} = req.params
    
    const rows = await conn.query(`SELECT * FROM estudiante WHERE id_estudiante = ${id}`);
    
    const student: any = rows[0];

    if (student.length > 0) {
      return res.json(student);
    }else{
      res.status(404).json({ text: "El estudiante no existe" });

    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    if (
      !req.body.id_estudiante ||
      !req.body.nombres ||
      !req.body.apellidos ||
      !req.body.correo ||
      !req.body.id_curso ||
      !req.body.password
    ) {
      res.status(400).json({ msg: 'Por favor ingresa todos los datos' });
    } else {
      const conn = await connect();

      const rows = await conn.query(
        `SELECT id_estudiante FROM estudiante WHERE id_estudiante = ${req.body.id_estudiante}`
      );
      const student: any = rows[0];

      if (student.toString() !== '') {
        res.json({ message: 'El usuario ya existe' });
      } else {
        const {
          id_estudiante,
          nombres,
          apellidos,
          correo,
          id_curso,
          password,
        } = req.body;

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

          res.json({ message: 'Estudiante añadido con exito' });
        }
      }
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const { id } = req.params;

    const {
      id_estudiante,
      nombres,
      apellidos,
      correo,
      id_curso,
      password,
    } = req.body;

    const student = {
      id_estudiante,
      nombres,
      apellidos,
      correo,
      id_curso,
      password,
    };
    
    const result = await conn.query(
      `UPDATE estudiante SET nombres = "${student.nombres}", apellidos = "${student.apellidos}", correo = "${student.correo}", curso_id_curso = "${student.id_curso}" WHERE id_estudiante = ${id}`
    );

    res.json({ message: 'Los datos han sido actualizados' });
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const conn = await connect();

    const { id } = req.params;

    const rows = await conn.query(`DELETE FROM estudiante WHERE id_estudiante = ${id}`);

    res.json({ message: 'El estudiante ha sido eliminado de la lista' });
  }
}

export const crudController = new CrudController();
export default crudController;
