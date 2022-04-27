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
exports.crudController = void 0;
const md5_1 = __importDefault(require("md5"));
const database_1 = require("../database");
class CrudController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const rows = yield conn.query(`SELECT * FROM estudiante`);
            const student = rows[0];
            res.json(student);
        });
    }
    listStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const { id } = req.params;
            const rows = yield conn.query(`SELECT * FROM estudiante WHERE id_estudiante = ${id}`);
            const student = rows[0];
            if (student.length > 0) {
                return res.json(student);
            }
            else {
                res.status(404).json({ text: "El estudiante no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body.id_estudiante ||
                !req.body.nombres ||
                !req.body.apellidos ||
                !req.body.correo ||
                !req.body.id_curso ||
                !req.body.password) {
                res.status(400).json({ msg: 'Por favor ingresa todos los datos' });
            }
            else {
                const conn = yield (0, database_1.connect)();
                const rows = yield conn.query(`SELECT id_estudiante FROM estudiante WHERE id_estudiante = ${req.body.id_estudiante}`);
                const student = rows[0];
                if (student.toString() !== '') {
                    res.json({ message: 'El usuario ya existe' });
                }
                else {
                    const { id_estudiante, nombres, apellidos, correo, id_curso, password, } = req.body;
                    const student = {
                        id_estudiante,
                        nombres,
                        apellidos,
                        correo,
                        id_curso,
                        password,
                    };
                    let passwordHash = (0, md5_1.default)(student.password + student.id_estudiante);
                    const rows = yield conn.query(`SELECT * FROM curso WHERE id_curso = ${req.body.id_curso}`);
                    const courseId = rows[0];
                    if (courseId.toString() === '') {
                        res.status(400).json({ msg: 'El curso no existe' });
                    }
                    else {
                        const result = yield conn.query(`INSERT INTO estudiante(id_estudiante, nombres, apellidos, correo, password, id_curso) VALUES("${student.id_estudiante}","${student.nombres}","${student.apellidos}","${student.correo}","${passwordHash}","${student.id_curso}")`);
                        res.json({ message: 'Estudiante añadido con exito' });
                    }
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const { id } = req.params;
            const { id_estudiante, nombres, apellidos, correo, id_curso, password, } = req.body;
            const student = {
                id_estudiante,
                nombres,
                apellidos,
                correo,
                id_curso,
                password,
            };
            const result = yield conn.query(`UPDATE estudiante SET nombres = "${student.nombres}", apellidos = "${student.apellidos}", correo = "${student.correo}", id_curso = "${student.id_curso}" WHERE id_estudiante = ${id}`);
            res.json({ message: 'Los datos han sido actualizados' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, database_1.connect)();
            const { id } = req.params;
            const rows = yield conn.query(`DELETE FROM estudiante WHERE id_estudiante = ${id}`);
            res.json({ message: 'El estudiante ha sido eliminado de la lista' });
        });
    }
}
exports.crudController = new CrudController();
exports.default = exports.crudController;
