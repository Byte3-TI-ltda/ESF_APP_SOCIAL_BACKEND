import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Redirect('/docs')
  redirect() { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
