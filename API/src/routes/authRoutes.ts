import { Router } from "express";

import { authController } from "../controllers/authController";

class AuthRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.post("/registrarP", authController.registrarP);
    this.router.post("/iniciarSesionP", authController.iniciarSesionP);

    this.router.post("/registrarE", authController.registrarE);
    this.router.post("/iniciarSesionE", authController.iniciarSesionE);

    this.router.post("/cerrarSesion", authController.cerrarSesion);
  }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;
