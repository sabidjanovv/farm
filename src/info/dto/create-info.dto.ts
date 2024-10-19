import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateInfoDto {
  @Field({ nullable: true })
  weight: number;

  @Field({ nullable: true })
  height: number;

  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  bread: string;

  @Field({ nullable: true })
  gender: string;

  @Field({ nullable: true })
  birth_or_acquisition: Date;

  @Field({ nullable: true })
  block_id:number;

  @Field({ nullable: true })
  animal_id:number;

  @Field({ nullable: true })
  parent_id:number;
}