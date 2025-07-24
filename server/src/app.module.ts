import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config'
import pg from 'pg'
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { Task } from './tasks/entities/task.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: pg,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Task,
        User
      ],
      autoLoadModels: true,
      dialectOptions: {
        // ssl: {
        //   // require: true,
        //   // rejectUnauthorized: false,
        // },
        ssl: false
      }
    }),
    TasksModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
