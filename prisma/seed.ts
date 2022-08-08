import { PrismaClient } from '@prisma/client';
import { languages } from './data/language';
import { status } from './data/status';
import { challenges } from './data/challenge';
import { users } from './data/user';
import { groups } from './data/group';
import { policies } from './data/policy';
import { roleGroups } from './data/role-group';
import { categories } from './data/category';
import { tags } from './data/tag';
const prisma = new PrismaClient();

async function main() {
  for (const status$ of status) {
    await prisma.status.create({
      data: status$,
    });
  }
  // for (const language of languages) {
  //   await prisma.language.create({
  //     data: language,
  //   });
  // }
  for (const tag of tags) {
    await prisma.topicTag.create({
      data: tag,
    });
  }
  // for (const challenge of challenges) {
  //   await prisma.challenge.create({
  //     data: challenge,
  //   });
  // }
  // for (const user of users) {
  //   await prisma.user.create({
  //     data: user,
  //   });
  // }
  // for (const category of categories) {
  //   await prisma.category.create({
  //     data: category,
  //   });
  // }
  // for (const group of groups) {
  //   await prisma.group.create({
  //     data: group,
  //   });
  // }

  // for (const policy of policies) {
  //   await prisma.policy.create({
  //     data: policy,
  //   });
  // }
  // for (const roleGroup of roleGroups) {
  //   await prisma.roleGroup.create({
  //     data: roleGroup,
  //   });
  // }
  console.log('done');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
