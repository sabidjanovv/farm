import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RecordOfIlness {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  animal_id: number;

  @Field()
  @Column()
  illness_type: string;

  @Field()
  @Column()
  date_disease: Date;

  @Field()
  @Column()
  medicines: string;

  @Field()
  @Column()
  date_treatment: Date;

  @Field()
  @Column()
  illness_photo: string;

  @Field()
  @Column()
  worker_id: number;
}
