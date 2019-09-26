import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { CoreController } from './core.controller';
import { LoggerMiddleware } from '../middleware/login.middleware';

@Module({
  controllers: [CoreController],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // forRoutes also accepts string/controller
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'core',
      method: RequestMethod.GET,
    });
  }
}
