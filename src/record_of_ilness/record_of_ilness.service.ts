import { Injectable } from '@nestjs/common';
import { CreateRecordOfIlnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordOfIlness } from './entities/record_of_ilness.entity';

@Injectable()
export class RecordOfIlnessService {
  constructor(
    @InjectRepository(RecordOfIlness) private readonly recordOfIlnessRepo: Repository<RecordOfIlness>
  ) {}
  create(createRecordOfIlnessDto: CreateRecordOfIlnessDto) {
    return this.recordOfIlnessRepo.save(createRecordOfIlnessDto);
  }

  findAll() {
    return this.recordOfIlnessRepo.find();
  }

  findOne(id: number) {
    return this.recordOfIlnessRepo.findBy({id});
  }

  async update(id: number, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    await this.recordOfIlnessRepo.update({ id }, updateRecordOfIlnessDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.recordOfIlnessRepo.delete({ id });
    return id;
  }
}
