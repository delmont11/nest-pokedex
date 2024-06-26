import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { JoinValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    //Load environment variables before any other module -> https://www.udemy.com/course/nest-framework/learn/lecture/32967646
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoinValidationSchema
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PokemonModule,
    MongooseModule.forRoot(process.env.MONGO_DB, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
