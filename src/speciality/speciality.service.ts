import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Speciality } from './entities/speciality.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectRepository(Speciality) private readonly specialityRepo: Repository<Speciality>
  ) {}
  
  create(createSpecialityDto: CreateSpecialityDto) {
    return this.specialityRepo.save(createSpecialityDto);
  }

  findAll() {
    return this.specialityRepo.find();
  }

  findOne(id: number) {
    return this.specialityRepo.findBy({id});
  }

  async update(id: number, updateSpecialityDto: UpdateSpecialityDto) {
    await this.specialityRepo.update({ id }, updateSpecialityDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.specialityRepo.delete({ id });
    return id;
  }
}
