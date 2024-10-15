import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { WorkersModule } from './workers/workers.module';
import { Worker } from './workers/entities/worker.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Admin, Worker],
      synchronize: true,
    }),
    AdminModule,
    WorkersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
