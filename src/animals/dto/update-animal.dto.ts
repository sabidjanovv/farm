import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateAnimalDto {
  @Field({ nullable: true })
  animal_type_id?: number;

  @Field({ nullable: true })
  photos?: string;
}
