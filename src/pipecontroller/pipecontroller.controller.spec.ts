import { Test, TestingModule } from '@nestjs/testing';
import { PipecontrollerController } from './pipecontroller.controller';

describe('Pipecontroller Controller', () => {
  let controller: PipecontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PipecontrollerController],
    }).compile();

    controller = module.get<PipecontrollerController>(PipecontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
