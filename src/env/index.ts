import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  JWT_SECRET: z.string(),
})

const environment = envSchema.safeParse(process.env)

if (environment.success === false) {
  console.error('Invalid environment variables', environment.error.format())

  throw new Error('Invalid environment variables')
}

export const env = environment.data
