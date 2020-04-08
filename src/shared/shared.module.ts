import { Module } from '@nestjs/common';
import * as V1 from './controllers/v1/shared.controller';
import { SharedService } from './providers/services/v1/shared.service';

@Module({
  controllers: [V1.SharedController],
  providers: [SharedService]
})
export class UsersModule {}
