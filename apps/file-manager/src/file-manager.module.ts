import { Module } from '@nestjs/common';
import { FileManagerController } from './file-manager.controller';
import { FileManagerService } from './file-manager.service';
import { MulterModule } from '@nestjs/platform-express';
import path from 'path';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@koj/common/strategies';
import { ConfigModule, ConfigService } from '@nestjs/config';
const coreFolder = path.resolve(__dirname + '/../');
const TMP_PATH = `${coreFolder}/uploads/tmp`;
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: TMP_PATH,
        limits: {
          files: 15, // allow up to 5 files per request,
          fieldSize: 5 * 1024 * 1024, // 2 MB (max file size)
        },
        onError: function (err, next) {
          console.log('error', err);
          next(err);
        },
      }),
    }),
    JwtModule.register({
      secret: 'nestjsPrismaAccessSecret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [FileManagerController],
  providers: [FileManagerService, JwtStrategy, ConfigService],
})
export class FileManagerModule {}
