import { Module } from '@nestjs/common';
import { V1AuthController, V2AuthController }  from './controllers/';
import { V1AuthService } from './providers/services';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './passport/local.strategy';
import { JwtStrategy } from './passport/jwt.strategy';
import { AuthRepository } from './providers/repositories/auth.repository';

@Module({
  controllers: [V1AuthController, V2AuthController],
  providers: [V1AuthService, LocalStrategy, AuthRepository, JwtStrategy],
  imports: [UsersModule,
     PassportModule,
     JwtModule.register({
     secret: jwtConstants.secret,
     signOptions: { expiresIn: '30d' },
  }),
  ],
})
export class AuthModule {}