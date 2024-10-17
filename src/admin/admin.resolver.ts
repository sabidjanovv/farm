import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Args, ID, Mutation, Query } from "@nestjs/graphql";
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Controller("admin")
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  create(@Args("createAdminDto") createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Query(() => [Admin])
  findAll() {
    return this.adminService.findAll();
  }

  @Query(() => Admin)
  findOne(@Args("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Mutation(() => Admin)
  update(
    @Args("id") id: string,
    @Args("updateAdminDto") updateAdminDto: UpdateAdminDto
  ) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Mutation(() => ID)
  remove(@Args("id", { type: () => ID }) id: string) {
    return this.adminService.remove(+id);
  }
}
