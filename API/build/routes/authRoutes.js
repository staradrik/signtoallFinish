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
        this.router.post("/registrar", authController_1.authController.registrar);
        this.router.post("/iniciarSesion", authController_1.authController.iniciarSesion);
        this.router.post("/cerrarSesion", authController_1.authController.cerrarSesion);
    }
}
const authRoutes = new AuthRoutes();
exports.default = authRoutes.router;
