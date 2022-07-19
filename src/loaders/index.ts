import { Application } from "express";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async (app: Application) => {
    mongooseLoader()
        .then(() => console.log('Connection successfully established'))
        .catch(err => console.log('Error connecting Database', err));

    expressLoader(app)
    return app
}