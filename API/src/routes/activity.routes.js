const express = require("express");
const router = express.Router();
const pool = require("../database");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../keys");

router.put(
  "/actualizarActividad/:id_estudiante/:id_actividad",
  async (req, res) => {
    const { id_estudiante, id_actividad } = req.params;

    // if (!req.headers.authorization) {
    //   return res.status(401).send("No tiene autorización");
    // }

    // const token = req.headers.authorization.split(" ")[1];

    // if (token === null) {
    //   return res.status(401).send("No tiene autorización");
    // }

    // const payload = jwt.verify(token, jwtSecret);

    await pool.query(
      `UPDATE estudiante_actividad SET actividad_realizada = "${req.body.actividad_realizada}", nota_actividad = "${req.body.nota}" WHERE id_estudiante = ${id_estudiante} AND id_actividad = ${id_actividad}`
    );

    res.json({ message: "Actividad realizada" });
  }
);

router.get("/verActividad/:id_estudiante/:id_actividad", async (req, res) => {
  const { id_estudiante, id_actividad } = req.params;

  const rows = await pool.query(
    `SELECT estudiante.nombres, estudiante.apellidos, actividad.nombre_actividad, estudiante_actividad.nota_actividad FROM actividad, estudiante_actividad, estudiante WHERE estudiante_actividad.id_actividad = actividad.id_actividad AND estudiante_actividad.id_estudiante = estudiante.id_estudiante AND actividad.id_actividad = ${id_actividad} AND estudiante.id_estudiante = ${id_estudiante} AND estudiante_actividad.nota_actividad = 5`
  );

  const activity = rows[0];

  if (activity[0] === undefined) {
    res.json({ message: "El estudiante no ha realizado la actividad" });
  } else {
    res.json(activity);
  }
});

router.get("/Actividades/:id_estudiante", async (req, res) => {
  const { id_estudiante } = req.params;

  const rows = await pool.query(
    `SELECT estudiante.nombres, estudiante.apellidos, actividad.nombre_actividad, estudiante_actividad.nota_actividad, actividad.url_imagen FROM actividad, estudiante_actividad, estudiante WHERE estudiante_actividad.id_actividad = actividad.id_actividad AND estudiante_actividad.id_estudiante = estudiante.id_estudiante AND estudiante.id_estudiante = ${id_estudiante}`
  );

  const activity = rows[0];

  if (activity[0] === undefined) {
    res.json({ message: "El estudiante no tiene registrado actividades" });
  } else {
    res.json(activity);
  }
});

module.exports = router;
