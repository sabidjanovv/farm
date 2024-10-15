import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Role {
  MANAGER = "MANAGER",
  MILKER = "SUT SOGUVCHI",
  EGG_COLLECTOR = "EGG COLLECTOR",
  CLEANER = "CLEANER",
  SECURITY = "SECURITY",
  NURSE = "NURSE",
  DOCTOR = "DOCTOR"
}

@Entity()
export class Worker {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  experience: number;

  @Column()
  speciality_id: number;

  @Column({ unique: true })
  phone_number: string;

  @Column({ unique: true })
  username: string;

  @Column()
  worker_schedule: string;

  @Column({ default: null })
  hashed_token: string;

  @Column({
    type: "enum",
    enum: Role,
  })
  role: Role;
}
