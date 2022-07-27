import { SetMetadata } from '@nestjs/common';
import { Permission } from '@/interfaces/permission.interface';

import { PERMISSIONS_METADATA } from './casbin.constant';

/**
 * You can define multiple permissions, but only
 * when all of them satisfied, could you access the route.
 */
export const Permissions = (...permissions: Permission[]) => {
  const perms = permissions.map((item) => {
    return item;
  });

  return SetMetadata(PERMISSIONS_METADATA, perms);
};
