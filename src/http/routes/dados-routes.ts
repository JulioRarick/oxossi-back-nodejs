import { FastifyInstance } from "fastify";
import { listAllDados } from "../controllers/dados/list-all-dados";
import { verifyJWT } from "../hooks/verify-jwt";

export async function dadosRoutes(app: FastifyInstance){
    app.get('/database/dados', {onRequest: [verifyJWT]} , listAllDados)
}