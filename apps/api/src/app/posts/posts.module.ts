import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
