import * as casbin from 'casbin';
import { DynamicModule, Module } from '@nestjs/common';

import { AdapterModule } from '@koj/adapter';
import { CasbinModuleOptions } from '@koj/common/interfaces';

import { ADAPTER_MODULE_OPTIONS, ADAPTER_ENFORCER } from '@koj/common/constants';
import { PermissionService } from './permission/permission.service';

@Module({})
export class CasbinModule {
  static register(options: CasbinModuleOptions): DynamicModule {
    const moduleOptionsProvider = {
      provide: ADAPTER_MODULE_OPTIONS,
      useValue: options || {},
    };

    let enforcerProvider = options.enforcerProvider;
    const importsModule = options.imports || [];

    if (!enforcerProvider) {
      if (!options.model || !options.policy) {
        throw new Error('must provide either enforcerProvider or both model and policy');
      }

      enforcerProvider = {
        provide: ADAPTER_ENFORCER,
        useFactory: async () => {
          const isFile = typeof options.policy === 'string';

          let policyOption;

          if (isFile) {
            policyOption = options.policy as string;
          } else {
            policyOption = await options.policy;
          }

          return casbin.newEnforcer(options.model, policyOption);
        },
      };
    }

    return {
      module: AdapterModule,
      providers: [moduleOptionsProvider, enforcerProvider, PermissionService],
      imports: [...importsModule],
      exports: [moduleOptionsProvider, enforcerProvider, PermissionService],
    };
  }
}
