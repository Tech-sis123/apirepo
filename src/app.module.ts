import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumController } from './sum/sum.controller';

@Module({
  imports: [],
  controllers: [AppController, SumController],
  providers: [AppService],
})
export class AppModule {}
