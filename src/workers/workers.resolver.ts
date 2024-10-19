import { WorkersService } from './workers.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Workers } from './entities/worker.entity';

@Resolver("workers")
export class WorkersResolver {
  constructor(private readonly workersService: WorkersService) {}

  @Mutation(() => Workers)
  createWorker(@Args("createWorker") createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Query(() => [Workers])
  findAllWorkers() {
    return this.workersService.findAll();
  }

  @Query(() => Workers)
  findOneWorker(@Args("id") id: number) {
    return this.workersService.findOne(+id);
  }

  @Mutation(() => Workers)
  updateWorker(
    @Args("id") id: number,
    @Args("updateWorker") updateWorkerDto: UpdateWorkerDto
  ) {
    return this.workersService.update(+id, updateWorkerDto);
  }

  @Mutation(() => ID)
  removeWorker(@Args("id", { type: () => ID }) id: number) {
    return this.workersService.remove(+id);
  }
}
