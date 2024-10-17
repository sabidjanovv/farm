import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
  MANAGER = "MANAGER",
  MILKER = "SUT SOGUVCHI",
  EGG_COLLECTOR = "EGG COLLECTOR",
  CLEANER = "CLEANER",
  SECURITY = "SECURITY",
  NURSE = "NURSE",
  DOCTOR = "DOCTOR",
}

registerEnumType(Role, {
  name: "Role",
  description: "Different roles for workers",
});

@ObjectType()
@Entity()
export class Worker {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  age: number;

  @Field()
  @Column()
  experience: number;

  @Field()
  @Column()
  speciality_id: number;

  @Field()
  @Column({ unique: true })
  phone_number: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Field()
  @Column()
  worker_schedule: string;

  @Field()
  @Column({ default: null })
  hashed_token: string;

  @Field(() => Role) 
  @Column({
    type: "enum",
    enum: Role,
  })
  role: Role;
}
