import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('')
export class SharedController {

  // constructor() {}

  @Get('')
  version(): string {
    return 'GET version/0.0.1';
  }

  @Get('status')
  getStatus(): string {
    return 'GET status/online';
  }

  @Get('echo')
  echo(): string {
    return 'GET echo';
  }

}

