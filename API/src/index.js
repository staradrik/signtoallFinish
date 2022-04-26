const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const profileRoutes = require("./routes/profile.routes");
const crudRoutes = require("./routes/crud.routes");
const activityRoutes = require("./routes/activity.routes");

const app = express();

//Configuración
app.set("port", process.env.PORT || 3000);

//   middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(authRoutes);
app.use(profileRoutes);
app.use(crudRoutes);
app.use(activityRoutes);

// Starting
app.listen(app.get("port"), () => {
  console.log("Server is in port", app.get("port"));
});
