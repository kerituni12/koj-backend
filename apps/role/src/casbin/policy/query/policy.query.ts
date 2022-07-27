import { transformObjectToQuery } from '@koj/common/utils';

export const policyByRoleResourceQuery = ({ roleId, resource }: any, select: any) => {
  const transformSelect = transformObjectToQuery(select, 'cp');
  return `
    select
      ${transformSelect}
    from
      casbin_policy cp
    where
      cp.subject in (
        select
          cr."rule"
        from
          role r
        join casbin_role cr on
          r.key = cr.role
        where
          r."id" = '${roleId}'
      )
      and cp."object" = '${resource}'
    order by cp.id desc 
`;
};
