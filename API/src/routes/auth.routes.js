const express = require("express");
const router = express.Router();
const md5 = require("md5");
const jwt = require("jsonwebtoken");

const pool = require("../database");
const { jwtSecret } = require("../keys");

function tokenProfesor(id_profesor, correo) {
  return jwt.sign({ id: id_profesor, email: correo }, jwtSecret, {
    expiresIn: "12h",
  });
}

function tokenEstudiante(id_estudiante, nombre) {
  return jwt.sign({ id: id_estudiante, nombres: nombre }, jwtSecret, {
    expiresIn: "12h",
  });
}

router.post("/registrarP", async (req, res) => {
  const rows = await pool.query(
    `SELECT * FROM confirmacion WHERE id_documento = ${req.body.id_profesor}`
  );

  const validacion = rows[0];

  if (validacion[0] !== undefined) {
    if (
      !req.body.id_profesor ||
      !req.body.nombres ||
      !req.body.apellidos ||
      !req.body.correo ||
      !req.body.password
    ) {
      res.status(400).json({ msg: "Por favor ingresa todos los datos" });
    } else {
      const rows = await pool.query(
        `SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
      );
      const teacher = rows[0];

      if (teacher[0] !== undefined) {
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

        await pool.query(
          `INSERT INTO profesor(id_profesor, nombres, apellidos, correo, password) VALUES("${teacher.id_profesor}","${teacher.nombres}","${teacher.apellidos}","${teacher.correo}","${passwordHash}")`
        );

        res.json({ message: "Registro exitoso" });
      }
    }
  } else {
    res.json({
      message:
        "Esta identificación no coindide con la guardada en la base de datos",
    });
  }
});

router.post("/iniciarSesionP", async (req, res) => {
  if (!req.body.id_profesor || !req.body.password) {
    res.status(400).json({ msg: "Por favor ingresa todos los datos" });
  } else {
    const rows = await pool.query(
      `SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
    );
    const teacherId = rows[0];

    if (teacherId.toString() !== "") {
      const compare = md5(req.body.password + req.body.id_profesor);

      const rows = await pool.query(
        `SELECT * FROM profesor WHERE id_profesor = ${req.body.id_profesor}`
      );
      const teacherPass = rows[0];

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
});

router.post("/registrarE", async (req, res) => {
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

      const rows = await pool.query(`SELECT * FROM actividad`);
      const activity = rows[0];

      if (courseId[0].id_curso > 0 && courseId[0].id_curso < 3) {
        for (let item = 0; item < activity.length; item++) {
          await pool.query(
            `INSERT INTO estudiante_actividad(id_estudiante, id_actividad, actividad_realizada, url_actividad, nota_actividad) VALUES("${
              id[0].id_estudiante
            }","${activity[item].id_actividad}",${0}, "${
              activity[item].url_actividad
            }", "${0}")`
          );

          if (activity[item].id_actividad >= 5) {
            break;
          }
        }
      } else {
        for (let item = 5; item < activity.length; item++) {
          await pool.query(
            `INSERT INTO estudiante_actividad(id_estudiante, id_actividad, actividad_realizada, url_actividad, nota_actividad) VALUES("${
              id[0].id_estudiante
            }","${activity[item].id_actividad}",${0}, "${
              activity[item].url_actividad
            }", "${0}")`
          );
        }
      }

      res.json({ message: "Registro Exitoso" });
    } else {
      res.status(400).json({ msg: "El curso no existe" });
    }
  }
});

router.post("/iniciarSesionE", async (req, res) => {
  if (!req.body.id_curso || !req.body.password) {
    res.status(400).json({ msg: "Por favor ingresa todos los datos" });
  } else {
    const compare = md5(req.body.password + req.body.id_curso);

    const rows = await pool.query(
      `SELECT * FROM estudiante WHERE id_curso = ${req.body.id_curso} AND password = "${compare}"`
    );
    const student = rows[0];

    if (student[0] !== undefined) {
      res.status(200).json({
        token: tokenEstudiante(student[0].id_estudiante, student[0].nombres),
      });
    } else {
      res.status(400).json({
        message: "El usuario no existe o la contraseña es incorrecta",
      });
    }
  }
});

module.exports = router;
