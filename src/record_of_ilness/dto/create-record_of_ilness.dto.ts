import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRecordOfIlnessDto {
    @Field({ nullable: true })
    animal_id: number;

    @Field({ nullable: true })
    illness_type: string;

    @Field({ nullable: true })
    date_disease: Date;

    @Field({ nullable: true })
    medicines: string;

    @Field({ nullable: true })
    date_treatment: Date;

    @Field({ nullable: true })
    illness_photo: string;

    @Field({ nullable: true })
    worker_id: number;
}
