import { Module } from '@nestjs/common';
import { RecordsOfFeedingService } from './records_of_feeding.service';
import { RecordsOfFeedingController } from './records_of_feeding.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordsOfFeeding } from './entities/records_of_feeding.entity';
import { RecordsOfFeedingResolver } from './records_of_feeding.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RecordsOfFeeding])],
  controllers: [RecordsOfFeedingController],
  providers: [RecordsOfFeedingService, RecordsOfFeedingResolver],
})
export class RecordsOfFeedingModule {}
