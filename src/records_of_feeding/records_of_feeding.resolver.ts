import { RecordsOfFeedingService } from "./records_of_feeding.service";
import { CreateRecordsOfFeedingDto } from "./dto/create-records_of_feeding.dto";
import { UpdateRecordsOfFeedingDto } from "./dto/update-records_of_feeding.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RecordsOfFeeding } from "./entities/records_of_feeding.entity";

@Resolver("records-of-feeding")
export class RecordsOfFeedingResolver {
  constructor(
    private readonly recordsOfFeedingService: RecordsOfFeedingService
  ) {}

  @Mutation(() => RecordsOfFeeding)
  createRecordsOfFeeding(
    @Args("createRecordsOfFeeding")
    createRecordsOfFeedingDto: CreateRecordsOfFeedingDto
  ) {
    return this.recordsOfFeedingService.create(createRecordsOfFeedingDto);
  }

  @Query(() => [RecordsOfFeeding])
  findAllRecordsOfFeeding() {
    return this.recordsOfFeedingService.findAll();
  }

  @Query(() => RecordsOfFeeding)
  findOneRecordsOfFeeding(@Args("id") id: number) {
    return this.recordsOfFeedingService.findOne(id);
  }

  @Mutation(() => RecordsOfFeeding)
  updateRecordsOfFeeding(
    @Args("id") id: string,
    @Args("updateRecordsOfFeeding")
    updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto
  ) {
    return this.recordsOfFeedingService.update(+id, updateRecordsOfFeedingDto);
  }

  @Mutation(() => ID)
  removeRecordsOfFeeding(@Args("id", { type: () => ID }) id: string) {
    return this.recordsOfFeedingService.remove(+id);
  }
}
