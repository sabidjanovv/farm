import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker } from './entities/worker.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkersService {
  constructor(
    @InjectRepository(Worker) private readonly workerRepo: Repository<Worker>
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

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.workerRepo.update({id}, updateWorkerDto);
  }

  remove(id: number) {
    return this.workerRepo.delete({id});
  }
}
