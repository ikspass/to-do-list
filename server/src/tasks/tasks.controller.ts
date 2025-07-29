import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Task } from './entities/task.entity';

@ApiTags('Задачи')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({summary: 'Создание задачи'})
  @ApiResponse({status: 200, type: Task})
  @Post()
  createTask(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @ApiOperation({summary: 'Получение задач по идентификатору пользователя'})
  @ApiResponse({status: 200, type: Task})
  @Get('user/:id')
  getAllTasksByUserId(@Param('id') id: number) {
    return this.tasksService.getAllByUserId(id);
  }

  @ApiOperation({summary: 'Получение задачи по уникальному идентификатору'})
  @ApiResponse({status: 200, type: Task})
  @Get(':id')
  getOneTaskById(@Param('id') id: number) {
    return this.tasksService.getOneById(id);
  }

  @ApiOperation({summary: 'Редактирование задачи'})
  @ApiResponse({status: 200, type: Task})
  @Patch(':id')
  updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @ApiOperation({summary: 'Удаление задачи'})
  @ApiResponse({status: 200, type: Task})
  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
