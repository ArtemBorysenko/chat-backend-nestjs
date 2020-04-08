import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../../repositories/users.repository'
import {  } from '../../../dto';
import {  } from '../../../interfaces';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor(private usersRepository: UsersRepository) {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    try {
      return await this.users.find(user => user.username === username);
    } catch (err) {
      console.log('ERROR UsersService: findOne');
      throw err;
    }
  }

  async getMe(): Promise<any> {
    try {
      //return await
    } catch (err) {
      console.log('ERROR UsersService: getMe');
      throw err;
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      return await this.usersRepository.getAllUsers();
    } catch (err) {
      console.log('ERROR UsersService: getAllUsers');
      throw err;
    }
  }

  async findUserById(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR UsersService: findUserById');
      throw err;
    }
  }

  async deleteUser(id: string): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR UsersService: deleteUser');
      throw err;
    }
  }

}
