import { Module } from '@nestjs/common';

import { PolicyService } from './policy.service';

@Module({
  exports: [PolicyService],
  providers: [PolicyService],
})
export class PolicyModule {}
