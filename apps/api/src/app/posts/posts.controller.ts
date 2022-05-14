import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  create() {
    return this.postsService.create();
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return this.postsService.update(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(id);
  }
}
