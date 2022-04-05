import { Router } from "express";

import { authController } from "../controllers/authController";
import { frontController } from "../controllers/frontController";

class AuthRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post("/registrar", authController.registrar);
    this.router.post("/iniciarSesion", authController.iniciarSesion);
    this.router.post("/cerrarSesion", authController.cerrarSesion);
  }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
