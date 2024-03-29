import { Prisma } from '@koj-prisma/koj';
import { User } from '@koj/generated/user/user.model';

export const permissionQuery = (user: User) => Prisma.sql`
  with permissions as (
    select 
      concat_ws('.', object, "action", effect) as permission, 
      cp.effect , cp."object" , cp."action" 
    from 
      casbin_policy cp 
    where 
      cp.subject in (select rule from casbin_role cr where cr."role" = ${user.role}) 
      and cp.domain_id = ${user.domainId}
  )
 
  select 
    concat_ws('.', per.object, per."action") as permission 
  from 
    permissions per 
  where 
    per.permission not in (
      select 
        permission 
      from 
        permissions per2 
      where 
        per2.effect = 'deny'
    )  
`;
