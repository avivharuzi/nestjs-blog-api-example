import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePostDto: UpdatePostDto
  ) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.postsService.delete(id);
  }
}
