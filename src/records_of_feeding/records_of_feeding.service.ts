import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordsOfFeeding } from './entities/records_of_feeding.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecordsOfFeedingService {
  constructor(
    @InjectRepository(RecordsOfFeeding) private readonly recordsOfFeedingRepo: Repository<RecordsOfFeeding>
  ) {}
  
  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recordsOfFeedingRepo.save(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.recordsOfFeedingRepo.find();
  }

  findOne(id: number) {
    return this.recordsOfFeedingRepo.findBy({id});
  }

  async update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    await this.recordsOfFeedingRepo.update({ id }, updateRecordsOfFeedingDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.recordsOfFeedingRepo.delete({ id });
    return id;
  }
}
