const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const pool = require("../database");
const { jwtSecret } = require("../keys");

router.get("/lista", async (req, res) => {
  const rows = await pool.query(`SELECT * FROM estudiante`);

  const student = rows[0];

  res.json(student);
});

router.get("/listaEstudiante/:id", async (req, res) => {
  const { id } = req.params;

  const rows = await pool.query(
    `SELECT * FROM estudiante WHERE id_estudiante = ${id}`
  );

  const student = rows[0];

  if (student.length > 0) {
    return res.json(student);
  } else {
    res.status(404).json({ text: "El estudiante no existe" });
  }
});

router.post("/crear", async (req, res) => {
  if (
    !req.body.nombres ||
    !req.body.apellidos ||
    !req.body.id_curso ||
    !req.body.password
  ) {
    res.status(400).json({ msg: "Por favor ingresa todos los datos" });
  } else {
    const { nombres, apellidos, id_curso, password } = req.body;
    const student = {
      nombres,
      apellidos,
      id_curso,
      password,
    };

    let passwordHash = md5(student.password + student.id_curso);

    const rows = await pool.query(
      `SELECT * FROM curso WHERE id_curso = ${req.body.id_curso}`
    );

    const courseId = rows[0];

    if (courseId[0] !== undefined) {
      await pool.query(
        `INSERT INTO estudiante(nombres, apellidos, password, id_curso) VALUES("${student.nombres}","${student.apellidos}","${passwordHash}","${student.id_curso}")`
      );

      const studentId = await pool.query(
        `SELECT MAX(id_estudiante) as id_estudiante FROM estudiante`
      );
      const id = studentId[0];

      const rows = await pool.query(`SELECT id_actividad FROM actividad`);
      const activity = rows[0];

      if (courseId[0].id_curso > 0 && courseId[0].id_curso < 3) {
        for (let item = 0; item < activity.length; item++) {
          await pool.query(
            `INSERT INTO estudiante_actividad(id_estudiante, id_actividad, actividad_realizada, nota_actividad) VALUES("${
              id[0].id_estudiante
            }","${activity[item].id_actividad}",${0},"${0}")`
          );

          if (activity[item].id_actividad >= 5) {
            break;
          }
        }
      } else {
        for (let item = 5; item < activity.length; item++) {
          await pool.query(
            `INSERT INTO estudiante_actividad(id_estudiante, id_actividad, actividad_realizada, nota_actividad) VALUES("${
              id[0].id_estudiante
            }","${activity[item].id_actividad}",${0},"${0}")`
          );
        }
      }

      res.json({ message: "Registro Exitoso" });
    } else {
      res.status(400).json({ msg: "El curso no existe" });
    }
  }
});

router.put("/actualizar/:id", async (req, res) => {
  const { id } = req.params;

  const { nombres, apellidos, id_curso, password } =
    req.body;

  const student = {
    nombres,
    apellidos,
    id_curso,
    password,
  };

  const rows1 = await pool.query(
    `SELECT * FROM curso WHERE id_curso = ${req.body.id_curso}`
  );

  const courseId = rows1[0];

  if (courseId[0] !== undefined) {
    console.log(req.body);

    const rows = await pool.query(
      `SELECT * FROM estudiante WHERE id_estudiante = ${id}`
    );
    const studentId = rows[0];
  
    if (studentId[0] !== undefined) {
      await pool.query(
        `UPDATE estudiante SET nombres = "${student.nombres}", apellidos = "${student.apellidos}", id_curso = "${student.id_curso}" WHERE id_estudiante = ${id}`
      );
  
      res.json({ message: "Los datos del estudiante han sido actualizados" });
    } else {
      res.status(404).json({ msg: "Este estudiante no esta en la lista" });
    }
  }else{
    res.status(400).json({ msg: "El curso no existe" });

  }
});

router.delete("/eliminar/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query(
    `DELETE FROM estudiante_actividad WHERE id_estudiante = ${id}`
  );

  await pool.query(`DELETE FROM estudiante WHERE id_estudiante = ${id}`);

  res.json({ message: "El estudiante ha sido eliminado de la lista" });
});

module.exports = router;
