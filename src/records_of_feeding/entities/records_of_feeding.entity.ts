import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class RecordsOfFeeding {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  date: Date;

  @Column()
  @Field()
  consumption: string;

  @Column()
  @Field()
  feeding_id: number;
}
