import 'dotenv/config'

import { execSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'

import { PrismaClient } from '@prisma/client'
import { Environment } from 'vitest/environments'

const prisma = new PrismaClient()

function generateUrlDatabase(schema: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a environment - DATABASE_URL')
  }

  const url = new URL(process.env.DATABASE_URL)

  url.searchParams.set('schema', schema)

  return url.toString()
}

export default <Environment>{
  name: 'prisma',
  transformMode: 'web',
  async setup() {
    const schema = randomUUID()

    const urlDatabase = generateUrlDatabase(schema)

    process.env.DATABASE_URL = urlDatabase

    execSync('npx prisma migrate deploy')

    console.log('Setting up prisma environment')

    return {
      async teardown() {
        await prisma.$executeRawUnsafe(
          `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
        )

        await prisma.$disconnect()

        console.log('Tearing down prisma environment')
      },
    }
  },
}
