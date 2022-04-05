import { Request, Response } from "express";
class FrontController {
  public iniciarSesionGet(req: Request, res: Response) {
    res.send("Inicio de Sesion");
  }
}

export const frontController = new FrontController();
export default frontController;
