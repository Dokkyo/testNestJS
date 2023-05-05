import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}