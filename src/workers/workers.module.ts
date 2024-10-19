import { Module } from '@nestjs/common';
import { WorkersService } from './workers.service';
import { WorkersController } from './workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './entities/worker.entity';
import { WorkersResolver } from './workers.resolver';

@Module({
  imports:[TypeOrmModule.forFeature([Workers])],
  controllers: [WorkersController],
  providers: [WorkersService,WorkersResolver],
})
export class WorkersModule {}
