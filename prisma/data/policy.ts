export const policies = [
  {
    subject: 'group:create:any',
    object: 'group',
    effect: 'allow',
    action: 'create',
    domainId: 1,
  },
  {
    subject: 'group:read:own',
    object: 'group',
    effect: 'allow',
    action: 'read',
    domainId: 1,
  },
  {
    subject: 'group:write:own',
    object: 'group',
    effect: 'allow',
    action: 'write',
    domainId: 1,
  },
  {
    subject: 'group:update:own',
    object: 'group',
    effect: 'allow',
    action: 'edit',
    domainId: 1,
  },
  {
    subject: 'group:delete:own',
    object: 'group',
    effect: 'allow',
    action: 'delete',
    domainId: 1,
  },
  {
    subject: 'group:read:any',
    object: 'group',
    effect: 'allow',
    action: 'read',
    domainId: 1,
  },
];
