import { Injectable } from '@nestjs/common';
import {  } from '../../dto';
import {  } from '../../interfaces';

@Injectable()
export class DialodsRepository {

  async getAllDialogs(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialodsRepository: getAllDialogs');
      throw err;
    }
  }

  async findDialogByParams(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialodsRepository: findDialogByParams');
      throw err;
    }
  }

  async createDialog(): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialodsRepository: createDialog');
      throw err;
    }
  }

  async deleteDialog(hash: any): Promise<any> {
    try {
      // return await
    } catch (err) {
      console.log('ERROR DialodsRepository: deleteDialog');
      throw err;
    }
  }

}
