import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { V1AuthService } from '../../providers/services/';
import { SignInAuthDto, SignUpAuthDto } from '../../dto';
import { ISignInAuth, ISignUpAuth} from '../../interfaces';

@Controller('api/v2/auth')
export class V2AuthController {

  constructor(private authService: V1AuthService) {}

  @Post('login')
  async signIn(@Body() signInAuthDto: SignInAuthDto){
    try {
      // return 'POST api/v2/auth/login';
      return await this.authService.signIn(signInAuthDto);
    } catch (err) {
      console.log('ERROR POST:api/v2/auth/login');
      throw err;
    }

  }

  @Post('registration')
  async signUp(@Body() signUpAuthDto: SignUpAuthDto){
    try {
      // return 'POST api/v2/auth/registration';
      return await this.authService.signUp(signUpAuthDto);
    } catch (err) {
      console.log('ERROR POST:api/v2/registration');
      throw err;
    }
  }

  @Get('verify/:hash')
  async verify(@Param('hash') hash){
    try {
      return await this.authService.verify(hash);
    } catch (err) {
      console.log('ERROR POST:api/v2/auth/hash');
      throw err;
    }
  }
}
