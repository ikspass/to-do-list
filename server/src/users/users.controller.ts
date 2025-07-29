import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({summary: 'Создание пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
  
  @ApiOperation({summary: 'Получение пользователя по уникальному идентификатору'})
  @ApiResponse({status: 200, type: User})
  @Get(':id')
  getOneUserById(@Param('id') id: string) {
    return this.usersService.getOneById(+id);
  }

  @ApiOperation({summary: 'Получение пользователя по логину'})
  @ApiResponse({status: 200, type: User})
  @Get()
  getOneUserByLogin(@Body() body: {login: string}) {
    return this.usersService.getOneByLogin(body.login);
  }

  // @ApiOperation({summary: 'Удаление пользователя'})
  // @ApiResponse({status: 200, type: User})
  // @Delete(':id')
  // deleteUser(@Param('id') id: number) {
  //   return this.usersService.delete(id);
  // }
}
