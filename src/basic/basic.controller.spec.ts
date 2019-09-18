import { Test, TestingModule } from '@nestjs/testing';
import { BasicController } from './basic.controller';

describe('AppController', () => {
  let appController: BasicController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BasicController],
    }).compile();

    appController = app.get<BasicController>(BasicController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
