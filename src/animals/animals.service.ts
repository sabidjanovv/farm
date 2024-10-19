import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal) private readonly animalRepo: Repository<Animal>
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    return this.animalRepo.save(createAnimalDto);
  }

  findAll() {
    return this.animalRepo.find();
  }

  findOne(id: number) {
    return this.animalRepo.findBy({id});
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    await this.animalRepo.update({ id }, updateAnimalDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.animalRepo.delete({ id });
    return id;
  }
}
