import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Speciality } from './entities/speciality.entity';

@Resolver("speciality")
export class SpecialityResolver {
  constructor(private readonly specialityService: SpecialityService) {}

  @Mutation(() => Speciality)
  createSpeciality(
    @Args("createSpeciality") createSpecialityDto: CreateSpecialityDto
  ) {
    return this.specialityService.create(createSpecialityDto);
  }

  @Query(() => [Speciality])
  findAllSpeciality() {
    return this.specialityService.findAll();
  }

  @Query(() => Speciality)
  findOneSpeciality(@Args("id") id: string) {
    return this.specialityService.findOne(+id);
  }

  @Mutation(() => Speciality)
  updateSpeciality(
    @Args("id") id: string,
    @Args("updateSpeciality") updateSpecialityDto: UpdateSpecialityDto
  ) {
    return this.specialityService.update(+id, updateSpecialityDto);
  }

  @Mutation(() => ID)
  removeSpeciality(@Args("id", { type: () => ID }) id: string) {
    return this.specialityService.remove(+id);
  }
}
