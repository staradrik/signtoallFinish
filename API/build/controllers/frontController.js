"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontController = void 0;
class FrontController {
    iniciarSesionGet(req, res) {
        res.send("Inicio de Sesion");
    }
}
exports.frontController = new FrontController();
exports.default = exports.frontController;
