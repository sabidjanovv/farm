import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Animal {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  animal_type_id: number;

  @Field()
  @Column()
  photos:string;
}
