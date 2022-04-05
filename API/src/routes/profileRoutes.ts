import express, { Router } from "express";
import passport, { session } from "passport";

import profileController from "../controllers/profileController";

class profileRoutes {
  router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get(
      "/profile",
      passport.authenticate("jwt", { session: false }),
      profileController.profile
    );
    // this.router.get('/:id', gamesController.getOne);
    // this.router.post("/", gamesController.create);
    // this.router.put("/:id", gamesController.update);
    // this.router.delete("/:id", gamesController.delete);
  }
}

export default new profileRoutes().router;
