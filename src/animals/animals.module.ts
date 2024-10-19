import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalsResolver } from './animals.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  controllers: [AnimalsController],
  providers: [AnimalsService, AnimalsResolver],
})
export class AnimalsModule {}
