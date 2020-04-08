import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { V1UsersService } from '../../providers/services';
import {  } from '../../dto';
import {  } from '../../interfaces';

@Controller('api/v1/user')
export class UsersController {

  constructor(private usersService: V1UsersService) {}

  @Get('me')
  async getMe(){
    try {
      // return 'GET api/v1/user/me';
      return await this.usersService.getMe();
    } catch (err) {
      console.log('ERROR GET:api/v1/user/me');
      throw err;
    }
  }

  @Get('find')
  async getAllUsers(){
    try {
      // return 'GET api/v1/user/find';
      return await this.usersService.getAllUsers();
    } catch (err) {
      console.log('ERROR GET:api/v1/user/find');
      throw err;
    }
  }

  @Get()
  async findUserById(){
    try {
      // return 'GET api/v1/user/id';
      return await this.usersService.findUserById();
    } catch (err) {
      console.log('ERROR GET:api/v1/user/');
      throw err;
    }
  }

  @Delete()
  async deleteUser(@Query('id') id){
    try {
      // return 'DELETE api/v1/user/id';
      return await this.usersService.deleteUser(id);
    } catch (err) {
      console.log('ERROR DELETE:api/v1/user/');
      throw err;
    }
  }

}
