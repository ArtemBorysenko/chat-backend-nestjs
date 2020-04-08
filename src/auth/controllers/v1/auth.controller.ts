import { Controller, Get, Post, Query, Body, UsePipes, UseGuards, Request  } from '@nestjs/common';
import { V1AuthService } from '../../providers/services/';
import { SignInAuthDto, SignUpAuthDto } from '../../dto';
import { JoiValidationPipe } from '../../providers/pipes/validation.pipe';
import { ISignInAuth, ISignUpAuth} from '../../interfaces';
import { LocalAuthGuard } from '../../passport/local-auth.guard';
import { JwtAuthGuard } from '../../passport/JWT-auth.guard';
import { AuthGuard } from '@nestjs/passport';

import { SetMetadata } from "@nestjs/common";
export const Public = () => SetMetadata( "isPublic", true );

@Controller('api/v1/auth')
export class AuthController {

  constructor(private authService: V1AuthService) {}

  @Public()
  // @UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    try {
      // return this.authService.login(req.user);
      return await req.user;
    } catch (err) {
      console.log('ERROR POST:api/v1/auth/login');
      throw err;
    }
  }

  // @Public()
  // @UseGuards(JwtAuthGuard)
  @Post('profile')
  async getProfile(@Request() req) {
    try {
      return await req.user;
    } catch (err) {
      console.log('ERROR POST:api/v1/auth/profile');
      throw err;
    }
  }

  @Post('signin')
  // @UsePipes(new JoiValidationPipe())
  async signIn(@Body() signInAuthDto: SignInAuthDto){
    try {
      console.log(signInAuthDto);
      return await this.authService.signIn(signInAuthDto);
      // return 'POST api/v1/auth/signin';
    } catch (err) {
      console.log('ERROR POST:api/v1/auth/signin');
      throw err;
    }
  }

  @Post('signup')
  async signUp(@Body() signUpAuthDto: SignUpAuthDto){
    try {
      return await this.authService.signUp(signUpAuthDto);
      // return 'POST api/v1/auth/signup';
    } catch (err) {
      console.log('ERROR POST:api/v1/auth/signup');
      throw err;
    }
  }

  @Get('verify')
  async verify(@Query('hash') hash){
    try {
      return await this.authService.verify(hash);
    } catch (err) {
      console.log('ERROR POST:api/v1/auth/hash');
      throw err;
    }
  }


}
