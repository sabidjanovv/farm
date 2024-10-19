import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Animal } from './entities/animal.entity';

@Resolver("animals")
export class AnimalsResolver {
  constructor(private readonly animalsService: AnimalsService) {}

  @Mutation(() => Animal)
  createAnimal(@Args("createAnimal") createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Query(() => [Animal])
  findAllAnimal() {
    return this.animalsService.findAll();
  }

  @Query(() => Animal)
  findOneAnimal(@Args("id") id: number) {
    return this.animalsService.findOne(+id);
  }

  @Mutation(() => Animal)
  updateAnimal(
    @Args("id") id: number,
    @Args("updateAnimal") updateAnimalDto: UpdateAnimalDto
  ) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  @Mutation(() => ID)
  removeAnimal(@Args("id", { type: () => ID }) id: number) {
    return this.animalsService.remove(+id);
  }
}
