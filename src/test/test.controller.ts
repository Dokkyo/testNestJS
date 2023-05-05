import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from 'interfaces/test.interface';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}
    
    @Get()
    findAll(): Test[] {
        return this.testService.findAll();
    }

    @Post()
    createTest(@Body() newTest) {
        console.log('newTest', newTest);
        this.testService.create(newTest);
    }
}
