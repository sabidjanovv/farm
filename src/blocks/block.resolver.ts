import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Block } from "./entities/block.entity";
import { BlockService } from "./block.service";

@Resolver("block")
export class BlockResolver {
  constructor(private readonly blockService: BlockService) {}

  @Mutation(() => Block)
  createBlock(@Args("createBlock") createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @Query(() => [Block])
  findAllBlock() {
    return this.blockService.findAll();
  }

  @Query(() => Block)
  findOneBlock(@Args("id") id: number) {
    return this.blockService.findOne(+id);
  }

  @Mutation(() => Block)
  updateBlock(
    @Args("id") id: number,
    @Args("updateBlock") updateBlockDto: UpdateBlockDto
  ) {
    return this.blockService.update(+id, updateBlockDto);
  }

  @Mutation(() => ID)
  removeBlock(@Args("id", { type: () => ID }) id: number) {
    return this.blockService.remove(+id);
  }
}
