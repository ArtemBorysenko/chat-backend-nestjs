import { Controller, Get, Post, Delete, Query, Body } from '@nestjs/common';
import { V1DialogsService } from '../../providers/services';
import {} from '../../dto';
import {} from '../../interfaces';


@Controller('api/v1/dialogs')
export class DialogsController {

  constructor(private dialogsService: V1DialogsService) {}

  @Get()
  async getAllDialogs(){
    try {
      // return 'GET api/v1/dialogs';
      return await this.dialogsService.getAllDialogs();
    } catch (err) {
      console.log('ERROR GET:api/v1/dialogs/');
      throw err;
    }
  }

  @Post()
  async createDialog(){
    try {
      // return 'POST api/v1/dialogs';
      return await this.dialogsService.createDialog();
    } catch (err) {
      console.log('ERROR POST:api/v1/dialogs/');
      throw err;
    }
  }

  @Delete()
  async verify(@Query('hash') hash){
    try {
      // return 'DELETE api/v1/dialogs';
      return await this.dialogsService.deleteDialog(hash);
    } catch (err) {
      console.log('ERROR DELETE:api/v1/dialogs/');
      throw err;
    }
  }

}
