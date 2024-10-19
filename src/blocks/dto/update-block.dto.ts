import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBlockDto {
  @Field({ nullable: true })
  number?: string;

  @Field({ nullable: true })
  description?: string;
}
