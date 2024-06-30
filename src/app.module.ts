import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { ListAccountsController } from './controllers/list-accounts.controller'

@Module({
  imports: [],
  controllers: [CreateAccountController, ListAccountsController],
  providers: [PrismaService],
})
export class AppModule {}
