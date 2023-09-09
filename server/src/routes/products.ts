import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Decimal } from "@prisma/client/runtime/library";

export async function products(app:FastifyInstance) {

    app.get('/products', async (request, reply) => {
        try {
            const products = await prisma.products.findMany();
            // Mapeia os produtos e converte o campo 'code' para string
            const serializedProducts = products.map((product) => ({
                ...product,
                code: product.code.toString(),
            }));
            return serializedProducts;
        } catch (error) {
            reply.status(500).send({ error: 'Internal Server Error' });
        }
    })

    app.get('/products/:code', async (request, reply) => {
        const params = request.params as { code: string };
        const { code } = params;
        
        const codeAsBigInt = BigInt(code);

        const prods = await prisma.products.findUniqueOrThrow({
            where: {
                code: codeAsBigInt,
            }
        })
        const serializedProds = {
            ...prods,
            code: prods.code.toString(),
        }

        return serializedProds
    })



    
    app.put('/products/:code', async (request, reply) => {
        interface ProductUpdateRequest {
            name: string;
            cost_price: number;
            sales_price: Decimal;
        }
        const params = request.params as { code: string };
        const { code } = params;
    
        const codeAsBigInt = BigInt(code);
    
        const requestBody = request.body as ProductUpdateRequest;
        console.log(requestBody)
        try {
            const existingProduct = await prisma.products.findUniqueOrThrow({
                where: {
                    code: codeAsBigInt,
                },
            });
    
            const updatedProduct = await prisma.products.update({
                where: {
                    code: codeAsBigInt,
                },
                data: {
                    sales_price: requestBody.sales_price,
                },
            });
    
            return updatedProduct;
        } catch (error) {
            reply.status(404).send('Produto não encontrado');
        }
    });



}
