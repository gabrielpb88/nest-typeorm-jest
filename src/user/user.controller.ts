import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  helloUser() {
    return 'hello User';
  }
}
