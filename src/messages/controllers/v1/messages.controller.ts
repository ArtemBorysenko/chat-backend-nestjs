import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { V1MessagesService } from '../../providers/services';
import {  } from '../../dto';
import {  } from '../../interfaces';

@Controller('api/v1/messages')
export class MessagesController {

  constructor(private messagesService: V1MessagesService) {}

  @Get()
  async getAllMessages(){
    try {
      // return 'GET api/v1/messages';
      return await this.messagesService.getAllMessages();
    } catch (err) {
      console.log('ERROR GET:api/v1/messages');
      throw err;
    }
  }

  @Post()
  async createMessage(){
    try {
      // return 'POST api/v1/messages';
      return await this.messagesService.createMessage();
    } catch (err) {
      console.log('ERROR POST:api/v1/messages');
      throw err;
    }
  }

  @Delete()
  async deleteMessage(@Query('id') id){
    try {
      // return 'DELETE api/v1/messages';
      return await this.messagesService.deleteMessage(id);
    } catch (err) {
      console.log('ERROR DELETE:api/v1/messages');
      throw err;
    }
  }

}

