"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/registrar", indexController_1.indexController.registrar);
        this.router.post("/iniciarSesion", indexController_1.indexController.iniciarSesion);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
