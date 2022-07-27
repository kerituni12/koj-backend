import { Test, TestingModule } from '@nestjs/testing';

import { ApppController } from './app.controller';
import { ApppService } from './app.service';

describe('ApppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ApppController],
      providers: [ApppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to simple!"', () => {
      const appController = app.get<ApppController>(ApppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to simple!',
      });
    });
  });
});
