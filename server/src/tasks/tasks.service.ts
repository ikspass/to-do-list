import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task)
    private taskRepository: typeof Task,
  ) {}

  async create(dto: CreateTaskDto) {
    if(!dto){
      throw new HttpException('Данные для создания не переданы', HttpStatus.BAD_REQUEST);
    }

    const task = await this.taskRepository.create(dto);
    
    return task;
  }

  async getAllByUserId(userId: number) {
    const tasks = await this.taskRepository.findAll({
      where: {userId}
    });
    
    if (tasks.length === 0) {
      throw new HttpException('У данного пользователя нет задач', HttpStatus.NOT_FOUND)
    }

    return tasks;
  }

  async getOneById(id: number) {
    const task = await this.taskRepository.findByPk(id);

    if (!task) {
      throw new HttpException('Нет задачи с таким идентификатором', HttpStatus.NOT_FOUND)
    }

    return task;
  }

  async update(id: number, dto: UpdateTaskDto) {
    const task = await this.taskRepository.findByPk(id);

    if(!task){
      throw new HttpException('Задача не найдена', HttpStatus.NOT_FOUND);
    }

    if(!dto){
      throw new HttpException('Данные для обновления не переданы', HttpStatus.BAD_REQUEST);
    }

    task.name = dto.name;
    task.description = dto.description;
    task.date = dto.date;

    await task.save();
    return task;
  }

  async delete(id: number) {
    return await this.taskRepository.destroy({
      where: {id}
    })
  }
}
