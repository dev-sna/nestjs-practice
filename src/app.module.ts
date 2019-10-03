import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AdvancedController } from './advanced/advanced.controller';
import { BasicModule } from './basic/basic.module';
import { LoggerMiddleware } from './middleware/login.middleware';
import { ExceptionFilterController } from './exception-filter/exception-filter.controller';
import { PipeControllerController } from './pipecontroller/pipecontroller.controller';
import { PipeControllerService } from './pipecontroller/pipecontroller.service';

@Module({
  imports: [BasicModule],
  controllers: [
    AdvancedController,
    ExceptionFilterController,
    PipeControllerController,
  ],
  providers: [PipeControllerService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AdvancedController);
  }
}
