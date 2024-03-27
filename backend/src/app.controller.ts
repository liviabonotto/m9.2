import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Counter } from 'prom-client';

const helloCounter = new Counter({
  name: 'hello_total_request',
  help: 'The total number of reqs to hello endpoint'
})

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    helloCounter.inc();
    return this.appService.getHello();
  }

  @Get('/metrics')
  async getMetrics(): Promise<string> {
    return this.appService.getMetrics();
  }
}
