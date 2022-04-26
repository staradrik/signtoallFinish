const express = require("express");
const router = express.Router();

router.put("/actividad/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query(
    `UPDATE estudiante_actividad SET actividad_realizada = "${1}", nota_actividad = "${5}" WHERE id_estudiante = ${student} AND id_actividad = ${id}`
  );

  res.json({ message: "Actividad realizada" });
});

module.exports = router;
