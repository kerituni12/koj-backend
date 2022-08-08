import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenTelemetryModule } from 'nestjs-otel';
import { MongooseModule } from '@nestjs/mongoose';

import { Comment, CommentSchema } from '../schemas/comment.schema';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      connectTimeoutMS: 5000,
      socketTimeoutMS: 5000,
      keepAlive: false,
      // readPreference: 'secondary',
      // w: 0,
      wtimeoutMS: 5000,
      waitQueueTimeoutMS: 5000,

      // retryWrites: true,
      // retryWrites: false,
      readPreference: 'secondaryPreferred'
      // replicaSet: 'dbrs',
    }),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    OpenTelemetryModule.forRoot()
  ],
  controllers: [CommentController],
  providers: [CommentService]
})
export class AppModule {}
