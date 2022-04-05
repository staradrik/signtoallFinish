"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const frontController_1 = require("../controllers/frontController");
class FrontRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/iniciarSesionGet", frontController_1.frontController.iniciarSesionGet);
    }
}
const frontRoutes = new FrontRoutes();
exports.default = frontRoutes.router;
