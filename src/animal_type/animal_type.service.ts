import { Injectable } from '@nestjs/common';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AnimalType } from './entities/animal_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectRepository(AnimalType) private readonly animalTypeRepo: Repository<AnimalType>
  ) {}

  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animalTypeRepo.save(createAnimalTypeDto);
  }

  findAll() {
    return this.animalTypeRepo.find();
  }

  findOne(id: number) {
    return this.animalTypeRepo.findBy({id});
  }

  async update(id: number, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    await this.animalTypeRepo.update({ id }, updateAnimalTypeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.animalTypeRepo.delete({ id });
    return id;
  }
}
