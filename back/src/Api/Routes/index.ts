
import testRoutes from "./test.routes";
import { Express } from "express";

export const configRoutes = (handler: Express) => {
    handler.use("/", testRoutes);
};
