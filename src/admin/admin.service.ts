import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private readonly adminRepo: Repository<Admin>
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepo.save({
      ...createAdminDto,
      hashed_password,
    });

    return {
      message: "Admin muvaffaqiyatli ro'yxatdan o'tkazildi",
      admin: this.adminRepo.save(newAdmin)
    };
  }

  findAll() {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({id});
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.adminRepo.update({id}, updateAdminDto);
  }

  remove(id: number) {
    return this.adminRepo.delete({id});
  }
}
