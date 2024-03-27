import { Injectable } from '@nestjs/common';
import { register } from 'prom-client';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getMetrics(): Promise<string> {
    return await register.metrics();
  }
}
