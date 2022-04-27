"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/registrarP", authController_1.authController.registrarP);
        this.router.post("/iniciarSesionP", authController_1.authController.iniciarSesionP);
        this.router.post("/registrarE", authController_1.authController.registrarE);
        this.router.post("/iniciarSesionE", authController_1.authController.iniciarSesionE);
        this.router.post("/cerrarSesion", authController_1.authController.cerrarSesion);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
