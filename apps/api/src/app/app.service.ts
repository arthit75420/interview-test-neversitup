import { Injectable } from '@nestjs/common';
import { Message } from '@interview-test-neversitup/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
