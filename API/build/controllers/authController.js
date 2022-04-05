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
exports.authController = void 0;
const md5_1 = __importDefault(require("md5"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../database");
function tokenProfesor(id_profesor, correo) {
    return jsonwebtoken_1.default.sign({ id: id_profesor, email: correo }, database_1.jwtSecret, {
        expiresIn: 86400,
    });
}
class AuthController {
    registrar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id_profesor ||
                !req.body.nombres ||
                !req.body.apellidos ||
                !req.body.correo ||
                !req.body.password) {
                res.status(400).json({ msg: "Por favor ingresa todos los datos" });
            }
            else {
                const conn = yield (0, database_1.connect)();
                const rows = yield conn.query(`SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`);
                const teacher = rows[0];
                if (teacher.toString() !== "") {
                    res.json({ message: "El usuario ya existe" });
                }
                else {
                    const { id_profesor, nombres, apellidos, correo, password } = req.body;
                    const teacher = {
                        id_profesor,
                        nombres,
                        apellidos,
                        correo,
                        password,
                    };
                    let passwordHash = (0, md5_1.default)(teacher.password + teacher.id_profesor);
                    const result = yield conn.query(`INSERT INTO profesor(id_profesor, nombres, apellidos, correo, password) VALUES("${teacher.id_profesor}","${teacher.nombres}","${teacher.apellidos}","${teacher.correo}","${passwordHash}")`);
                    res.json({ message: "Registro exitoso" });
                }
            }
        });
    }
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id_profesor || !req.body.password) {
                res.status(400).json({ msg: "Por favor ingresa todos los datos" });
            }
            else {
                const conn = yield (0, database_1.connect)();
                const rows = yield conn.query(`SELECT id_profesor FROM profesor WHERE id_profesor = ${req.body.id_profesor}`);
                const teacherId = rows[0];
                if (teacherId.toString() !== "") {
                    const compare = (0, md5_1.default)(req.body.password + req.body.id_profesor);
                    const rows = yield conn.query(`SELECT * FROM profesor WHERE id_profesor = ${req.body.id_profesor}`);
                    const teacherPass = rows[0];
                    if (teacherPass[0].password === compare) {
                        res.status(200).json({
                            token: tokenProfesor(teacherPass[0].id_profesor, teacherPass[0].correo),
                        });
                    }
                    else {
                        res.status(400).json({ message: "Contraseña Incorrecta" });
                    }
                }
                else {
                    res.status(400).json({ message: "El usuario no existe" });
                }
            }
        });
    }
    cerrarSesion(req, res) {
        req.logOut;
    }
}
exports.authController = new AuthController();
exports.default = exports.authController;
