import express from "express";
import cors from "cors";
import { RES } from "./const";

export function configureApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use(
    "/",
    express.json(),
    cors(),
    (err: any, req: any, res: any, next: any) => {
      console.log("err", err);
      if (err) {
        res.status(RES.error.status).send({
          code: RES.error.code,
          message: err.toString() ? err.toString().replace("Error:", "") : "Server Error",
          data: {},
        });
      }
    }
  );

  app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
  });

  return app;
}
export const postRun = (port: string | number) => {
  console.log(`server started at http://localhost:${port}`);
};
