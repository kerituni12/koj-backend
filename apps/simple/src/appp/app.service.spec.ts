import { Test } from '@nestjs/testing';

import { ApppService } from './app.service';

describe('ApppService', () => {
  let service: ApppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ApppService],
    }).compile();

    service = app.get<ApppService>(ApppService);
  });

  describe('getData', () => {
    it('should return "Welcome to simple!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to simple!' });
    });
  });
});
