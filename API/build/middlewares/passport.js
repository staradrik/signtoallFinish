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
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = require("passport-jwt");
const database_1 = require("../database");
const opts = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: database_1.jwtSecret,
};
exports.default = new passport_jwt_1.Strategy(opts, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield (0, database_1.connect)();
        const rows = yield conn.query(`SELECT id_profesor FROM profesor WHERE id_profesor = ${payload.id}`);
        const teacherId = rows[0];
        console.log(teacherId);
        if (teacherId.toString() !== "") {
            return done(null, teacherId[0].id_profesor);
        }
        else {
            return done(null, false);
        }
    }
    catch (error) {
        console.log(error);
    }
}));
