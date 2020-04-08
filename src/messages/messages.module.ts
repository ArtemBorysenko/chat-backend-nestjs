import { Module } from '@nestjs/common';
import { V1MessagesController, V2MessagesController } from './controllers';
import { V1MessagesService, V2MessagesService } from './providers/services';
import { MessagesRepository } from './providers/repositories/messages.repository';

@Module({
  controllers: [V1MessagesController, V2MessagesController],
  providers: [V1MessagesService, V2MessagesService, MessagesRepository]
})
export class MessagesModule {}
