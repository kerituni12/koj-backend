import { Module } from '@nestjs/common';

import { RoleGroupService } from './role.service';

@Module({
  providers: [RoleGroupService],
  exports: [RoleGroupService],
})
export class RoleGroupModule {}
