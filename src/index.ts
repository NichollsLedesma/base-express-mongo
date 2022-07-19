import express, { Application } from "express";

import config from "./config";

const app: Application = express();
(require('./loaders').default(app))
    .then(() => {
        app.listen(config.port, () => console.log(`running on port: ${config.port}`));
    });
