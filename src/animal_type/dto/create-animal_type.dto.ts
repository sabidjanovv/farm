import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAnimalTypeDto {
    @Field({ nullable: true })
    type_name: string;

    @Field({ nullable: true })
    description: string;
}