import { Router, Request, Response } from "express"

export default (app: Router) => {
    const routes = Router()
    app.use('/test', routes)

    routes.get('/', (req: Request, res: Response) => {
        return res.send("test")
    })
}