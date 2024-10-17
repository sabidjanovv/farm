import { ApiProperty } from "@nestjs/swagger";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateAdminDto {
  @ApiProperty({
    example: "Sardor Sobidjonov",
    description: "Adminning toliq ismi",
  })
  @Field({ nullable: true })
  full_name: string;

  @ApiProperty({ example: "admin@gmail.com", description: "Adminning email'i" })
  @Field({ nullable: true })
  email: string;

  @ApiProperty({
    example: "+998941151158",
    description: "Adminning telefon raqami",
  })
  @Field({ nullable: true })
  phone_number: string;

  @ApiProperty({
    example: "@admin2008",
    description: "Adminning telegram linki",
  })
  @Field({ nullable: true })
  tg_link: string;

  @ApiProperty({
    example: "admin123",
    description: "Adminning passwordi",
  })
  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  confirm_password: string;

  @ApiProperty({
    example: "false",
    description: "Adminning active yoki active emaslik statusi",
  })
  @Field({ nullable: true })
  is_active: boolean;

  @ApiProperty({
    example: "false",
    description: "Adminning creator yoki creator emaslik statusi",
  })
  @Field({ nullable: true })
  is_creator: boolean;

  @ApiProperty({
    example: "Admin is CREATOR and he/she can do most things",
    description: "Admin haqida ma'lumot",
  })
  @Field({ nullable: true })
  description: string;
}
