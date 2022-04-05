"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/profile", passport_1.default.authenticate("jwt", { session: false }), gamesController_1.default.profile);
        // this.router.get('/:id', gamesController.getOne);
        // this.router.post("/", gamesController.create);
        // this.router.put("/:id", gamesController.update);
        // this.router.delete("/:id", gamesController.delete);
    }
}
exports.default = new GameRoutes().router;
