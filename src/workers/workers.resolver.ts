import { Controller} from '@nestjs/common';
import { WorkersService } from './workers.service';
import { Args, ID, Mutation, Query } from "@nestjs/graphql";
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';

@Controller("workers")
export class WorkersResolver {
  constructor(private readonly workersService: WorkersService) {}

  @Mutation(() => Worker)
  createWorker(@Args("createWorkerDto") createWorkerDto: CreateWorkerDto) {
    return this.workersService.create(createWorkerDto);
  }

  @Query(() => [Worker])
  findAllWorker() {
    return this.workersService.findAll();
  }

  @Query(() => Worker)
  findOneWorker(@Args("id") id: string) {
    return this.workersService.findOne(+id);
  }

  @Mutation(() => Worker)
  updateWorker(@Args("id") id: string, @Args("updateWorkerDto") updateWorkerDto: UpdateWorkerDto) {
    return this.workersService.update(+id, updateWorkerDto);
  }

  @Mutation(()=> ID)
  removeWorker(@Args("id",{type:()=> ID}) id: string) {
    return this.workersService.remove(+id);
  }
}
