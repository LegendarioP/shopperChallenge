import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function packs(app: FastifyInstance) {

    app.get('/packs', async (request, reply) => {
        try {
            const packs = await prisma.packs.findMany();
            const serializedPacks = packs.map((pack) => ({
                // ...pack,
                id: pack.id.toString(),
                pack_id: pack.pack_id.toString(),
                product_id: pack.product_id.toString(),
                qty: pack.qty.toString()
            }));
            //console.log(packs)
            console.log(serializedPacks)
            return serializedPacks;

        } catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });
        }
    })
}