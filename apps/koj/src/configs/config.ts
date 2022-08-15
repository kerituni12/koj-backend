import { join } from 'path';
import type { Config } from '@/interfaces/config.interface';

const config: Config = {
  app: {
    port: parseInt(process.env.PORT, 10) || 3001,
    cors: {
      enabled: true
    },
    globalPrefix: 'api'
  },
  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api'
  },
  graphql: {
    path: 'api/graphql',
    playgroundEnabled: false,
    debug: true,
    schemaDestination: join(__dirname, 'src/schema.gql'),
    sortSchema: true
  },
  security: {
    expiresIn: '15d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10
  }
};

export default (): Config => config;
