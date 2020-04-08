import { Injectable } from '@nestjs/common';
import { MessagesRepository } from '../../repositories/messages.repository'
import {  } from '../../../dto';
import {  } from '../../../interfaces';

@Injectable()
export class V2MessagesService {

  constructor(private messagesRepository: MessagesRepository) {}

  async getMessages(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR MessagesService: getAllMessages');
      throw err;
    }
  }

}
