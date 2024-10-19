import { Injectable } from '@nestjs/common';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Info } from './entities/info.entity';

@Injectable()
export class InfoService {
  constructor(
    @InjectRepository(Info) private readonly infoRepo: Repository<Info>
  ) {}

  create(createInfoDto: CreateInfoDto) {
    return this.infoRepo.save(createInfoDto);
  }

  findAll() {
    return this.infoRepo.find();
  }

  findOne(id: number) { 
    return this.infoRepo.findBy({ id });
  }

  async update(id: number, updateInfoDto: UpdateInfoDto) {
    await this.infoRepo.update({ id }, updateInfoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.infoRepo.delete({ id });
    return id;
  }
}
