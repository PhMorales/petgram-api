import prisma from "../config/prisma";


export async function getUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany()

    res.json()
}