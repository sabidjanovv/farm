import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateAdminDto {
  @Field({ nullable: true })
  full_name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  tg_link?: string;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  confirm_password?: string;

  @Field({ nullable: true })
  is_active?: boolean;

  @Field({ nullable: true })
  is_creator?: boolean;

  @Field({ nullable: true })
  description?: string;
}
