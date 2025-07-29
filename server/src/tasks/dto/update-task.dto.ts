import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @ApiProperty({example: 'Разработать макет главной страницы', description: 'Задача'})
  @IsString({message: 'Должно быть строкой'})
  @Length(3, 100, { message: 'Должно содержать от 3 до 100 символов' })
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  readonly name: string;

  @ApiProperty({example: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.', description: 'Описание задачи'})
  @IsString({message: 'Должно быть строкой'})
  @Length(0, 500, { message: 'Должно содержать от 0 до 500 символов' })
  readonly description: string;
  
  @ApiProperty({example: '2025-07-29', description: 'Дата'})
  @IsDate({ message: 'Должно быть корректной датой' })
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  readonly date: Date;
}
