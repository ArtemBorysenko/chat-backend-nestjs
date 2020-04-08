import { Injectable } from '@nestjs/common';
import { DialodsRepository } from '../../repositories/dialods.repository'
import {  } from '../../../dto';
import {  } from '../../../interfaces';

@Injectable()
export class DialogsService {

  constructor(private dialodsRepository: DialodsRepository) {}

  async getAllDialogs(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialogsService: getAllDialogs');
      throw err;
    }
  }

  async createDialog(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialogsService: createDialog');
      throw err;
    }
  }

  async deleteDialog(hash: any): Promise<any> {
    try {
      // return await `${hash}`;
    } catch (err) {
      console.log('ERROR DialogsService: deleteDialog');
      throw err;
    }
  }

}
