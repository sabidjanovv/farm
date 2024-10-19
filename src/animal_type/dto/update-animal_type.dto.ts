import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateAnimalTypeDto {
  @Field({ nullable: true })
  type_name?: string;

  @Field({ nullable: true })
  description?: string;
}
