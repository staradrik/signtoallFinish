import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportAuth from "./middlewares/passport";

import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import frontRoutes from "./routes/frontRoutes";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  //   configuracion
  config(): void {
    this.app.set("port", process.env.PORT || 3000);

    //   middlewares
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(passport.initialize());
    passport.use(passportAuth);
  }

  //Rutas
  routes(): void {
    this.app.use(authRoutes);
    this.app.use(profileRoutes);
    this.app.use(frontRoutes);
  }

  //Empieza la aplicacion
  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
