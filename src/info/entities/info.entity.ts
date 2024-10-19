import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Info {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  weight: number;

  @Field({ nullable: true })
  @Column()
  height: number;

  @Field({ nullable: true })
  @Column()
  color: string;

  @Field({ nullable: true })
  @Column()
  bread: string;

  @Field({ nullable: true })
  @Column()
  gender: string;

  @Field({ nullable: true })
  @Column()
  birth_or_acquisition: Date;

  @Field({ nullable: true })
  @Column()
  block_id: number;

  @Field({ nullable: true })
  @Column()
  animal_id: number;

  @Field({ nullable: true })
  @Column()
  parent_id: number;
}
