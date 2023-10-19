import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page as string) || 1;
                const pageSize: number = Number(req.query.pageSize as string) || 10;

                const regform = await prisma.regform.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalregform = await prisma.regform.count();
                const totalPage: number = Math.ceil(totalregform / pageSize);

                res.status(200).json({ regform, totalPage });
            } catch (error: any) {
                console.error(error);
                res.status(500).json({ error: "An error occurred while fetching the regform" });
            }
            break;

        case 'POST':
            try {
                // Validate and sanitize req.body if needed
                const newregform = await prisma.regform.create({
                    data: req.body,
                });

                res.setHeader('Content-Type', 'application/json');
                res.status(201).json(newregform);
            } catch (error: any) {
                console.error(error);
                res.status(500).json({ error: "An error occurred while creating the regform" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
