import { Injectable } from '@nestjs/common';
import { Test } from 'interfaces/test.interface';

@Injectable()
export class TestService {
        test: Test[] = [
        {
            id: 1,
            title: 'test app',
            description: 'Create NestJS test app',
            done: false,
        },
        {
            id: 2,
            title: 'bread',
            description: 'buy bread',
            done: true,
        },
        {
            id: 3,
            title: 'wine',
            description: 'buy wine',
            done: true,
        }
    ];
    findAll(): Test[] {
        return this.test;
    }
    create(test: Test) {
        this.test = [...this.test, test];
    }
}
