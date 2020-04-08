import { Injectable } from '@nestjs/common';
import {  } from '../../dto';
import {  } from '../../interfaces';

@Injectable()
export class MessagesRepository {

  async getAllMessages(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesRepository: getAllMessages');
      throw err;
    }
  }

  async createMessage(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesRepository: createMessage');
      throw err;
    }
  }

  async findMessageByParams(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesRepository: findMessageByParams');
      throw err;
    }
  }

  async deleteMessage(id: string): Promise<any> {
    try {
      // return await `${id}`;
    } catch (err) {
      console.log('ERROR MessagesRepository: deleteMessage');
      throw err;
    }
  }

}
