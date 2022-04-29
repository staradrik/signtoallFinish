const express = require("express");
const router = express.Router();
const pool = require("../database");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../keys");

router.put("/actualizarActividad/:id", async (req, res) => {
  const { id } = req.params;

  if (!req.headers.authorization) {
    return res.status(401).send("No tiene autorización");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (token === null) {
    return res.status(401).send("No tiene autorización");
  }

  const payload = jwt.verify(token, jwtSecret);

  await pool.query(
    `UPDATE estudiante_actividad SET actividad_realizada = "${1}", nota_actividad = "${5}" WHERE id_estudiante = ${payload.id} AND id_actividad = ${id}`
  );

  res.json({ message: "Actividad realizada" });
});

router.get("/verActividad/:id", async (req, res) => {
  const { id } = req.params;

  const rows = await pool.query(`SELECT estudiante.nombres, estudiante.apellidos, actividad.nombre_actividad, estudiante_actividad.nota_actividad FROM actividad, estudiante_actividad, estudiante WHERE estudiante_actividad.id_actividad = actividad.id_actividad AND estudiante_actividad.id_estudiante = estudiante.id_estudiante AND actividad.id_actividad = "${id}"`);

  const activity = rows[0];

  res.json(activity);
});

module.exports = router;
