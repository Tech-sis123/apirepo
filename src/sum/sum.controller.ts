import { Controller, Post, Body, BadRequestException } from '@nestjs/common';

@Controller('sum')
export class SumController {
    @Post()
calaculateSum(@Body() body: {numbers: number[] }): {sum: number} {
    const {numbers} = body;
    if(!Array.isArray(numbers) || numbers.length !== 10) {
        throw new BadRequestException('Array must be exactly 10 numbers')
    }
    const sum = numbers.reduce((total, num) => total + num, 0);
    return{sum};
} 
}
