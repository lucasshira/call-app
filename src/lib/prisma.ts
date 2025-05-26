import { PrismaClient } from '@/generated/prisma'

export const prisma = new PrismaClient({
  // visualuzation of the queries in the console
  log: ['query'],
})
