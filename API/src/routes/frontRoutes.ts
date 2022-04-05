import { Router } from "express";

import { frontController } from "../controllers/frontController";

class FrontRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/iniciarSesionGet", frontController.iniciarSesionGet);
  }
}

const frontRoutes = new FrontRoutes();
export default frontRoutes.router;
