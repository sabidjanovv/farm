import { Role } from "../entities/worker.entity";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateWorkerDto {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  age: number;

  @Field({ nullable: true })
  experience: number;

  @Field({ nullable: true })
  speciality_id: number;

  @Field({ nullable: true })
  phone_number: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  worker_schedule: string;

  @Field(() => Role, { nullable: true })
  role: Role;
}
