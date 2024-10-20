import { Module } from '@nestjs/common';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { RecordOfIlnessController } from './record_of_ilness.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordOfIlness } from './entities/record_of_ilness.entity';
import { RecordOfIlnessResolver } from './record_of_ilness.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RecordOfIlness])],
  controllers: [RecordOfIlnessController],
  providers: [RecordOfIlnessService, RecordOfIlnessResolver],
})
export class RecordOfIlnessModule {}
