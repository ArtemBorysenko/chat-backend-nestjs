import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from '../../repositories/auth.repository'
import { ISignUpAuth, ISignInAuth } from '../../../interfaces'
import { SignInAuthDto, SignUpAuthDto } from '../../../dto'
import { V1UsersService } from '../../../../users/providers/services';


@Injectable()
export class AuthService {

  constructor(private authRepository: AuthRepository,
              private usersService: V1UsersService,
              private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findOne(username);
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    } catch (err) {
      console.log('ERROR AuthService: validateUser');
      throw err;
    }
  }

  async login(user: any) {
    try {
      const payload = { username: user.username, sub: user.userId };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    } catch (err) {
      console.log('ERROR AuthService: login');
      throw err;
    }
  }


  async signIn(signInUserDto: SignInAuthDto): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthService: signIn');
      throw err;
    }
  }

  async signUp(signUpUserDto: SignUpAuthDto): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthService: signUp');
      throw err;
    }
  }

  async verify(hash: any): Promise<any> {
    try {
      // return await `${hash}`;
    } catch (err) {
      console.log('ERROR AuthService: verify');
      throw err;
    }
  }
}
