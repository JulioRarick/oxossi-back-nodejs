import { FastifyReply, FastifyRequest } from 'fastify'

export async function refresh(request: FastifyRequest, reply: FastifyReply) {
  await request.jwtVerify({ onlyCookie: true })
  const { role } = request.user
  const token = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
      },
    },
  )
  const refreshToken = await reply.jwtSign(
    {
      role,
    },
    {
      sign: {
        sub: request.user.sub,
        expiresIn: '5d',
      },
    },
  )

  return reply
    .setCookie('refresh-token', refreshToken, {
      path: '/',
      secure: true,
      sameSite: true,
      httpOnly: true,
    })
    .status(200)
    .send({
      token,
    })
}
