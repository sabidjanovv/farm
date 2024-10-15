import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  full_name: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone_number: string;

  @Column({ unique: true })
  tg_link: string;

  @Column()
  hashed_password: string;

  @Column({default:null})
  hashed_token: string;

  @Column({default: false})
  is_active: boolean;

  @Column({default: false})
  is_creator: boolean;

  @Column()
  description: string;
}
