import fastify from 'fastify'
import cors from '@fastify/cors'
import { products } from './routes/products'
import { packs } from './routes/packs'


const app = fastify()

app.register(cors, {
    origin: true,
})


app.register(products)
app.register(packs)



app.listen({
    port: 3333,
}).then(() => {
    console.log("Servidor online e rodando on localhost:3333")
})