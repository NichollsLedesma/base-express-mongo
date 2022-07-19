import { IUser } from "./interfaces"
import user from "./user"

export const getAll = async (): Promise<Array<IUser>> => {
    return user.find()
}

export const add = async ({ name, email }: { name: string, email: string }): Promise<IUser> => {
    const newUser = await user.create({ name, email })

    return newUser
}