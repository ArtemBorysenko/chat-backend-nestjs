import { Module } from '@nestjs/common';
import { V1DialogsController } from './controllers/';
import { V1DialogsService } from './providers/services';
import { DialodsRepository } from './providers/repositories/dialods.repository';

@Module({
  controllers: [V1DialogsController],
  providers: [V1DialogsService, DialodsRepository]
})
export class DialogsModule {}
