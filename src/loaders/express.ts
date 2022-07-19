import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import config from "./../config";
import apiRoutes from "./../api";

export default (app: Application) => {
    app.use(helmet())
    app.use(morgan('dev'))
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

     // Load API routes
  app.use(config.api.prefix, apiRoutes());
}