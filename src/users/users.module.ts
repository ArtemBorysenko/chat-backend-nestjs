import { Module } from '@nestjs/common';
import { V1UsersController } from './controllers/';
import { V1UsersService } from './providers/services/';
import { UsersRepository } from './providers/repositories/users.repository';

@Module({
  controllers: [V1UsersController],
  providers: [V1UsersService, UsersRepository],
  exports: [V1UsersService],
})
export class UsersModule {}
