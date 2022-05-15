import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dto/create-post.dto';
import { PostEntity } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>
  ) {}

  findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }

  async findOne(id: string): Promise<PostEntity> {
    const post = await this.postRepository.findOne({
      id,
    });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  create(createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postRepository.save(createPostDto);
  }

  async update(id: string, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    await this.postRepository.update(id, updatePostDto);

    return this.findOne(id);
  }

  async delete(id: string): Promise<PostEntity> {
    const post = await this.findOne(id);

    await this.postRepository.delete(id);

    return post;
  }
}
