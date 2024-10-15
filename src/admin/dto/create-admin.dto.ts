import { ApiProperty } from "@nestjs/swagger";

export class CreateAdminDto {
  @ApiProperty({
    example: "Sardor Sobidjonov",
    description: "Adminning toliq ismi",
  })
  full_name: string;

  @ApiProperty({ example: "admin@gmail.com", description: "Adminning email'i" })
  email: string;

  @ApiProperty({
    example: "+998941151158",
    description: "Adminning telefon raqami",
  })
  phone_number: string;

  @ApiProperty({
    example: "@admin2008",
    description: "Adminning telegram linki",
  })
  tg_link: string;

  @ApiProperty({
    example: "admin123",
    description: "Adminning passwordi",
  })
  password: string;

  confirm_password: string;

  @ApiProperty({
    example: "false",
    description: "Adminning active yoki active emaslik statusi",
  })
  is_active: boolean;

  @ApiProperty({
    example: "false",
    description: "Adminning creator yoki creator emaslik statusi",
  })
  is_creator: boolean;

  @ApiProperty({
    example: "Admin is CREATOR and he/she can do most things",
    description: "Admin haqida ma'lumot",
  })
  description: string;
}
