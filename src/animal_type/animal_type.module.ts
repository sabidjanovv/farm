import { Module } from '@nestjs/common';
import { AnimalTypeService } from './animal_type.service';
import { AnimalTypeController } from './animal_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalType } from './entities/animal_type.entity';
import { AnimalTypeResolver } from './animal_type.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([AnimalType])],
  controllers: [AnimalTypeController],
  providers: [AnimalTypeService, AnimalTypeResolver],
})
export class AnimalTypeModule {}
