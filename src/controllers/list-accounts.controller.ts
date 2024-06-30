import { Controller, Get } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/accounts')
export class ListAccountsController {
  constructor(private prisma: PrismaService) {}
  @Get()
  async handle() {
    return this.prisma.user.findMany()
  }
}
