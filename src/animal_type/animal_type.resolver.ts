import { AnimalTypeService } from "./animal_type.service";
import { CreateAnimalTypeDto } from "./dto/create-animal_type.dto";
import { UpdateAnimalTypeDto } from "./dto/update-animal_type.dto";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AnimalType } from "./entities/animal_type.entity";

@Resolver("animal-type")
export class AnimalTypeResolver {
  constructor(private readonly animalTypeService: AnimalTypeService) {}

  @Mutation(() => AnimalType)
  createAnimalType(
    @Args("createAnimalType") createAnimalTypeDto: CreateAnimalTypeDto
  ) {
    return this.animalTypeService.create(createAnimalTypeDto);
  }

  @Query(() => [AnimalType])
  findAllAnimalType() {
    return this.animalTypeService.findAll();
  }

  @Query(() => AnimalType)
  findOneAnimalType(@Args("id") id: number) {
    return this.animalTypeService.findOne(+id);
  }

  @Mutation(() => AnimalType)
  updateAnimalType(
    @Args("id") id: number,
    @Args("updateAnimalType") updateAnimalTypeDto: UpdateAnimalTypeDto
  ) {
    return this.animalTypeService.update(+id, updateAnimalTypeDto);
  }

  @Mutation(() => ID)
  removeAnimalType(@Args("id") id: number) {
    return this.animalTypeService.remove(+id);
  }
}
