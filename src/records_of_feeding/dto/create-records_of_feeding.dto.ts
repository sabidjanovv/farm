import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRecordsOfFeedingDto {
    @Field({ nullable: true })
    date: Date;

    @Field({ nullable: true })
    consumption: string;

    @Field({ nullable: true })
    feeding_id: number;
}