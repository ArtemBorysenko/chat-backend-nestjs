import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DialogsModule } from './dialogs/dialogs.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule,
    DialogsModule,
    MessagesModule,
    AuthModule,
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
