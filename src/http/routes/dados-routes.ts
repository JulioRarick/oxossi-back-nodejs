import { FastifyInstance } from "fastify";
import { listAllDados } from "../controllers/dados/list-all-dados";
import { verifyJWT } from "../hooks/verify-jwt";
import { createDados } from "../controllers/dados/create-dados-controller";

export async function dadosRoutes(app: FastifyInstance){
    app.get('/database/dados', {onRequest: [verifyJWT]} , listAllDados)
    app.post('/database/dados/upload', {onRequest: [verifyJWT]}, createDados)
}