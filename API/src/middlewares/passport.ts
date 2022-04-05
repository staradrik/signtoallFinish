import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { connect, jwtSecret } from "../database";
import { Request, Response } from "express";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const conn = await connect();

    const rows = await conn.query(
      `SELECT id_profesor FROM profesor WHERE id_profesor = ${payload.id}`
    );
    const teacherId: any = rows[0];

    console.log(teacherId);

    if (teacherId.toString() !== "") {
      return done(null, teacherId[0].id_profesor);
    } else {
      return done(null, false);
    }
  } catch (error) {
    console.log(error);
  }
});
