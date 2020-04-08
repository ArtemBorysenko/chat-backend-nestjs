import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { V2MessagesService } from '../../providers/services/';
import {  } from '../../dto';
import {  } from '../../interfaces';

@Controller('api/v2/messages')
export class V2MessagesController {

  constructor(private messagesService: V2MessagesService) {}

  @Get()
  async getMessages(): Promise<any> {
    try {
      // return 'GET api/v1/messages';
      return await this.messagesService.getMessages();
    } catch (err) {
      console.log('ERROR DELETE:api/v2/messages');
      throw err;
    }

  }

}

