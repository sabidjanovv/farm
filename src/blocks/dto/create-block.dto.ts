import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateBlockDto {
  @Field({ nullable: true })
  number: string;

  @Field({ nullable: true })
  description: string;
}
