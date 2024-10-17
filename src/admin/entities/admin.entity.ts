import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
@Entity()
export class Admin {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  full_name: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column({ unique: true })
  phone_number: string;

  @Field()
  @Column({ unique: true })
  tg_link: string;

  @Field()
  @Column()
  hashed_password: string;

  @Field()
  @Column({ default: null })
  hashed_token: string;

  @Field()
  @Column({ default: false })
  is_active: boolean;

  @Field()
  @Column({ default: false })
  is_creator: boolean;

  @Field()
  @Column()
  description: string;
}
