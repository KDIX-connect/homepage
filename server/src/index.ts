import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

await fastify.register(cors, { origin: true });

fastify.get('/api/status', async () => ({ ok: true }));

const port = Number(process.env.PORT || 4000);
fastify.listen({ port, host: '0.0.0.0' }).then(() => console.log(`server listening ${port}`));

if(import.meta.hot){
    import.meta.hot.accept(async ()=>{
        fastify.close()
    })
}