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
    !req.body.id_estudiante ||
    !req.body.nombres ||
    !req.body.apellidos ||
    !req.body.correo ||
    !req.body.id_curso ||
    !req.body.password
  ) {
    res.status(400).json({ msg: "Por favor ingresa todos los datos" });
  } else {
    const rows = await pool.query(
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

      const rows = await pool.query(
        `SELECT * FROM curso WHERE id_curso = ${req.body.id_curso}`
      );

      const courseId = rows[0];

      if (courseId.toString() === "") {
        res.status(400).json({ msg: "El curso no existe" });
      } else {
        await pool.query(
          `INSERT INTO estudiante(id_estudiante, nombres, apellidos, correo, password, id_curso) VALUES("${student.id_estudiante}","${student.nombres}","${student.apellidos}","${student.correo}","${passwordHash}","${student.id_curso}")`
        );

        res.json({ message: "Estudiante añadido con exito" });
      }
    }
  }
});

router.put("/actualizar/:id", async (req, res) => {
  const { id } = req.params;

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

  const rows = await pool.query(
    `SELECT * FROM estudiante WHERE id_estudiante = ${id}`
  );
  const studentId = rows[0];

  if (studentId[0] !== undefined) {
    await pool.query(
      `UPDATE estudiante SET nombres = "${student.nombres}", apellidos = "${student.apellidos}", correo = "${student.correo}", id_curso = "${student.id_curso}" WHERE id_estudiante = ${id}`
    );

    res.json({ message: "Los datos del estudiante han sido actualizados" });
  } else {
    res.status(404).json({ msg: "Ese estudiante no esta en la lista" });
  }
});

router.delete("/eliminar/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query(`DELETE FROM estudiante WHERE id_estudiante = ${id}`);

  res.json({ message: "El estudiante ha sido eliminado de la lista" });
});

module.exports = router;
