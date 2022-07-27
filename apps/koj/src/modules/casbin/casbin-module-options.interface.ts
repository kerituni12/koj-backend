import {
  ExecutionContext,
  Provider,
  DynamicModule,
  ForwardReference,
  Type,
} from '@nestjs/common';

export interface CasbinModuleOptions<T = any> {
  model?: string;
  policy?: string | Promise<T>;
  userFromContext: (context: ExecutionContext) => string;
  enforcerProvider?: Provider<any>;
  /**
   * Optional list of imported modules that export the providers which are
   * required in this module.
   */
  imports?: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>;
}
