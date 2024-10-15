import { Role } from "../entities/worker.entity";

export class CreateWorkerDto {
  name: string;
  age: number;
  experience: number;
  speciality_id: number;
  phone_number: string;
  username: string;
  worker_schedule: string;
  role: Role;
}
