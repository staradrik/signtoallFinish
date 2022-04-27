"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const crudController_1 = require("../controllers/crudController");
class FrontRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/lista", crudController_1.crudController.list);
        this.router.get("/listaEstudiante/:id", crudController_1.crudController.listStudent);
        this.router.post("/crear", crudController_1.crudController.create);
        this.router.put("/actualizar/:id", crudController_1.crudController.update);
        this.router.delete("/eliminar/:id", crudController_1.crudController.delete);
    }
}
const frontRoutes = new FrontRoutes();
exports.default = frontRoutes.router;
