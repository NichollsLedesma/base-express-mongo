import { Request, Response } from "express"
import * as dao from "./dao"

export const getAll = async (req: Request, res: Response) => {
    const data = await dao.getAll()
    return res.json(data)
}

export const add = async (req: Request, res: Response) => {
    const { name, email } = req.body
    const data = await dao.add({ name, email })
        .catch(err => res.status(400).json({ "message": err.message }))
    return res.json(data)
}