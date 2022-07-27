import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ApolloDriverConfig } from "@nestjs/apollo";
import { GqlOptionsFactory } from "@nestjs/graphql";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

import { GraphqlConfig } from "@/interfaces/config.interface";
import { tracer } from "@/tracing/tracer";
import { trace, context } from "@opentelemetry/api";
import { GraphQLDateTime } from "graphql-iso-date";

@Injectable()
export class GqlConfig implements GqlOptionsFactory {
  constructor(private configService: ConfigService) {}
  createGqlOptions(): ApolloDriverConfig {
    const graphqlConfig = this.configService.get<GraphqlConfig>("graphql");
    return {
      path: graphqlConfig.path,
      // schema options
      autoSchemaFile: graphqlConfig.schemaDestination || "./src/schema.graphql",
      sortSchema: graphqlConfig.sortSchema,
      buildSchemaOptions: {
        numberScalarMode: "integer"
      },
      fieldResolverEnhancers: ["guards", "interceptors", "filters"],
      // subscription
      installSubscriptionHandlers: true,
      debug: graphqlConfig.debug,
      stopOnTerminationSignals: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      playground: graphqlConfig.playgroundEnabled,
      cors: {
        credentials: true,
        origin: true
        // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        // allowedHeaders: "Content-Type,Accept,Authorization,Access-Control-Allow-Origin"
      },
      // resolvers: { DateTime: GraphQLDateTime },
      context: ({ req, res }) => ({ req, res }),
      formatError(error) {
        console.log(
          "🚀 ~ file: graphql.config.ts ~ line 37 ~ GqlConfig ~ formatError ~ err",
          error,
          error.extensions.exception
        );

        // From handled exception
        if (error.extensions.response?.statusCode) {
          return error;
        }

        const span = tracer.startSpan("exception");
        trace.setSpan(context.active(), span);
        span.recordException(error);
        span.setAttributes({
          exceptionLevel: "validate"
        });
        span.end();

        if (error.extensions?.exception?.stacktrace) {
          delete error.extensions.exception.stacktrace;
        }
        return error;
      }
    };
  }
}
