import { Router } from 'express';
import testRoute from "./routes/test";
import userRoutes from './users/route'

export default () => {
    const app = Router();
    testRoute(app);
    userRoutes(app)

    return app;
};