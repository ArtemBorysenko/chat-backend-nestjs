import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../../repositories/messages.repository'
import {  } from '../../../dto';
import {  } from '../../../interfaces';

@Injectable()
export class MessagesService {

  constructor(private messagesRepository: MessagesRepository) {}

  async getAllMessages(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesService: getAllMessages');
      throw err;
    }
  }

  async createMessage(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesService: createMessage');
      throw err;
    }
  }

  async deleteMessage(id: string): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesService: deleteMessage');
      throw err;
    }
  }

}
