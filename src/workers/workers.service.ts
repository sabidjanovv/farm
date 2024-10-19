import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Workers } from './entities/worker.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Workers) private readonly workerRepo: Repository<Workers>
  ) {}

  create(createWorkerDto: CreateWorkerDto) {
    return this.workerRepo.save(createWorkerDto);
  }

  findAll() {
    return this.workerRepo.find();
  }

  findOne(id: number) {
    return this.workerRepo.findBy({id});
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    await  this.workerRepo.update({id}, updateWorkerDto);
    return this.findOne(id)
  }

  async remove(id: number) {
    await this.workerRepo.delete({id});
    return id
  }
}
