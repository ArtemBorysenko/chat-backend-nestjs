import { Injectable } from '@nestjs/common';
import { ISignUpAuth, ISignInAuth } from '../../interfaces'
import { SignInAuthDto, SignUpAuthDto } from '../../dto'
import { Users } from '../../../core/database/entities'
import { Dialogs } from '../../../core/database/entities'
import { Messages } from '../../../core/database/entities'
import {getManager, getMongoRepository, getMongoManager} from "typeorm";
import { UsersRepository } from '../../../users/providers/repositories/users.repository'

@Injectable()
export class AuthRepository extends UsersRepository{

  async createUser(data: ISignUpAuth): Promise<any> {
    try {
      // const user = await this.createUser(data);
      // return await
    } catch (err) {
      console.log('ERROR AuthRepository: createUser');
      throw err;
    }
  }

  async login(data: ISignInAuth): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthRepository: login');
      throw err;
    }
  }

  async verify(hash: any): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthRepository: verify');
      throw err;
    }
  }

  async signIn(signInUserDto: ISignUpAuth): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthRepository: signIn');
      throw err;
    }
  }

  async signUp(signUpUserDto: ISignInAuth): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR AuthRepository: signUp');
      throw err;
    }
  }
}