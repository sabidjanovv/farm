import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/entities/admin.entity";
import { WorkersModule } from "./workers/workers.module";
import { Workers } from "./workers/entities/worker.entity";
import { VaccineModule } from "./vaccine/vaccine.module";
import { Vaccine } from "./vaccine/entities/vaccine.entity";
import { BlockModule } from "./blocks/block.module";
import { AnimalsModule } from "./animals/animals.module";
import { Animal } from "./animals/entities/animal.entity";
import { Block } from "./blocks/entities/block.entity";
import { SpecialityModule } from "./speciality/speciality.module";
import { Speciality } from "./speciality/entities/speciality.entity";
import { FeedingModule } from "./feeding/feeding.module";
import { Feeding } from "./feeding/entities/feeding.entity";
import { RecordsOfFeedingModule } from "./records_of_feeding/records_of_feeding.module";
import { RecordsOfFeeding } from "./records_of_feeding/entities/records_of_feeding.entity";
import { InfoModule } from "./info/info.module";
import { Info } from "./info/entities/info.entity";
import { AnimalTypeModule } from "./animal_type/animal_type.module";
import { AnimalType } from "./animal_type/entities/animal_type.entity";
import { VaccinationHistoryModule } from "./vaccination_history/vaccination_history.module";
import { VaccinationHistory } from "./vaccination_history/entities/vaccination_history.entity";
import { RecordOfIlnessModule } from './record_of_ilness/record_of_ilness.module';
import { RecordOfIlness } from "./record_of_ilness/entities/record_of_ilness.entity";
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { FiberProduction } from "./fiber_production/entities/fiber_production.entity";
import { MeatProductionModule } from './meat_production/meat_production.module';
import { MeatProduction } from "./meat_production/entities/meat_production.entity";
import { MilkProductionModule } from './milk_production/milk_production.module';
import { MilkProduction } from "./milk_production/entities/milk_production.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [
        Admin,
        Workers,
        Block,
        Vaccine,
        Animal,
        Speciality,
        Feeding,
        RecordsOfFeeding,
        Info,
        AnimalType,
        VaccinationHistory,
        RecordOfIlness,
        FiberProduction,
        MeatProduction,
        MilkProduction
      ],
      synchronize: true,
    }),
    AdminModule,
    WorkersModule,
    VaccineModule,
    BlockModule,
    AnimalsModule,
    SpecialityModule,
    FeedingModule,
    RecordsOfFeedingModule,
    InfoModule,
    AnimalTypeModule,
    VaccinationHistoryModule,
    RecordOfIlnessModule,
    FiberProductionModule,
    MeatProductionModule,
    MilkProductionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
