import { Router } from "express"
import { getAll, add } from "./controller"

export default (app: Router) => {
    const routes = Router()
    app.use('/users', routes)

    routes.get('/', getAll)
    routes.post('/', add)
}