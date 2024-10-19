import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Info } from './entities/info.entity';

@Resolver("info")
export class InfoResolver {
  constructor(private readonly infoService: InfoService) {}

  @Mutation(() => Info)
  createInfo(@Args("createInfo") createInfoDto: CreateInfoDto) {
    return this.infoService.create(createInfoDto);
  }

  @Query(() => [Info])
  findAllInfo() {
    return this.infoService.findAll();
  }

  @Query(() => Info)
  findOneInfo(@Args("id") id: number) {
    return this.infoService.findOne(+id);
  }

  @Mutation(() => Info)
  updateInfo(
    @Args("id") id: number,
    @Args("updateInfo") updateInfoDto: UpdateInfoDto
  ) {
    return this.infoService.update(+id, updateInfoDto);
  }

  @Mutation(() => ID)
  removeInfo(@Args("id", { type: () => ID }) id: number) {
    return this.infoService.remove(+id);
  }
}
