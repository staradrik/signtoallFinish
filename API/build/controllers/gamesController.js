"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const md5_1 = __importDefault(require("md5"));
const database_1 = require("../database");
class GamesController {
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({ text: "success" });
            // const games = await pool.query('SELECT * FROM games');
            res.send("Entraste!");
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const { id_profesor, nombres, apellidos, correo, password } = req.body;
            const teacher = {
                id_profesor,
                nombres,
                apellidos,
                correo,
                password,
            };
            let passwordHash = (0, md5_1.default)(teacher.password + teacher.correo);
            let prueba = (0, md5_1.default)(teacher.password);
            console.log(passwordHash);
            console.log(prueba);
            const result = yield conn.query(`INSERT INTO profesor(id_profesor, nombres, apellidos, correo, password) VALUES("${teacher.id_profesor}","${teacher.nombres}","${teacher.apellidos}","${teacher.correo}","${passwordHash}")`);
            res.json({ message: "Registro exitoso" });
        });
    }
    //     public async getOne(req: Request, res: Response): Promise<any> {
    //         const { id } = req.params;
    //         const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    //         console.log(games.length);
    //         if (games.length > 0) {
    //             return res.json(games[0]);
    //         }
    //         res.status(404).json({ text: "The game doesn't exits" });
    //     }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: "update " + req.params.id });
            // const { id } = req.params;
            // const oldGame = req.body;
            // await pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            // res.json({ message: "The game was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ text: "delete " + req.params.id });
            // const { id } = req.params;
            // await pool.query('DELETE FROM games WHERE id = ?', [id]);
            // res.json({ message: "The game was deleted" });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
