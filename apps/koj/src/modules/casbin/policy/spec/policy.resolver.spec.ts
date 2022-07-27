import { Test, TestingModule } from '@nestjs/testing';
import { PolicyResolver } from '../policy.resolver';
import { PolicyService } from '../policy.service';

describe('PolicyResolver', () => {
  let resolver: PolicyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicyResolver, PolicyService],
    }).compile();

    resolver = module.get<PolicyResolver>(PolicyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
