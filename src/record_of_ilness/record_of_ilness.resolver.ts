import { RecordOfIlnessService } from './record_of_ilness.service';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RecordOfIlness } from './entities/record_of_ilness.entity';

@Resolver("record-of-ilness")
export class RecordOfIlnessResolver {
  constructor(private readonly recordOfIlnessService: RecordOfIlnessService) {}

  @Mutation(() => RecordOfIlness)
  async createRecordOfIlness(
    @Args("createRecordOfIlness")
    createRecordOfIlnessDto: CreateRecordOfIlnessDto
  ) {
    return this.recordOfIlnessService.create(createRecordOfIlnessDto);
  }

  @Query(() => [RecordOfIlness])
  async findAllRecordOfIlness() {
    return this.recordOfIlnessService.findAll();
  }

  @Query(() => RecordOfIlness)
  findOneRecordOfIlness(@Args("id") id: number) {
    return this.recordOfIlnessService.findOne(id);
  }

  @Mutation(() => RecordOfIlness)
  updateRecordOfIlness(
    @Args("id") id: number,
    @Args("updateRecordOfIlness")
    updateRecordOfIlnessDto: UpdateRecordOfIlnessDto
  ) {
    return this.recordOfIlnessService.update(+id, updateRecordOfIlnessDto);
  }

  @Mutation(() => ID)
  removeRecordOfIlness(@Args("id", { type: () => ID }) id: number) {
    return this.recordOfIlnessService.remove(+id);
  }
}
