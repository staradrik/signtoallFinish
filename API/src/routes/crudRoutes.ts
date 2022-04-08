import { Router } from "express";

import { crudController } from "../controllers/crudController";

class FrontRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/lista", crudController.list);
    // this.router.get("/:id", gamesController.getOne);
    this.router.post("/crear", crudController.create);
    this.router.put("/actualizar:id", crudController.update);
    this.router.delete("/eliminar:id", crudController.delete);
  }
}

const frontRoutes = new FrontRoutes();
export default frontRoutes.router;
