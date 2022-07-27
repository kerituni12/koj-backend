# Fork of [typegraphql-prisma](https://www.npmjs.com/package/typegraphql-prisma)

This project is a fork of another with minor changes, created for personal use.

Long term support is not guaranteed, use of this copy is at your own risk.

## Installation

```
npm install typegraphql-prisma-nestjs --save-dev
```

## Differences from the original project:

Functions and classes used in generated files from scheme of [prisma](https://github.com/prisma/prisma), imports from [nestjs](https://nestjs.com)

Original:
```typescript
import { Ctx, Query, Resolver } from "type-graphql";
```

In fork:
```typescript
import { Context, Query, Resolver } from "@nestjs/graphql";
```

## Example use NestJS + Prisma2 + Typegraphql

https://github.com/EndyKaufman/typegraphql-prisma-nestjs-example

---

![integration logo](https://raw.githubusercontent.com/EndyKaufman/typegraphql-prisma-nestjs/prisma/img/integration.png)

# TypeGraphQL & Prisma integration

Prisma generator to emit TypeGraphQL types and CRUD resolvers from your Prisma schema.

[**https://prisma.typegraphql.com/**](https://prisma.typegraphql.com/)

## Documentation

The documentation, installation guide, detailed description of the API and all of its features is [available on the website](https://prisma.typegraphql.com/).

## Examples

You can check out some usage examples on this repo:

https://github.com/EndyKaufman/typegraphql-prisma-nestjs-example

## Feedback

Currently released version `0.x` is just a preview of the upcoming integration. For now it lacks some customization option - picking models or fields of object types to expose in the schema, hiding input fields as well as picking exposed args fields. However, the base functionality is working well, so I strongly encourage you to give it a try and play with it.

Any feedback about the developers experience or ideas about new features or enhancements are very welcome - please feel free to put your two cents by using the [GitHub Discussions feature](https://github.com/MichalLytek/typegraphql-prisma/discussions/new):

<img src="https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/feedback.png" width="327"/>

## Future plans

In some far feature, when Prisma SDK will be ready, the `typegraphql-prisma` integration will also allow to use a code-first approach to build a `schema.prisma` and GraphQL schema at once, using classes with decorators as a single source of truth.

Stay tuned! :muscle:
