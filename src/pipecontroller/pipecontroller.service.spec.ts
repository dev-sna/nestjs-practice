import { Test, TestingModule } from '@nestjs/testing';
import { PipecontrollerService } from './pipecontroller.service';

describe('PipecontrollerService', () => {
  let service: PipecontrollerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PipecontrollerService],
    }).compile();

    service = module.get<PipecontrollerService>(PipecontrollerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
