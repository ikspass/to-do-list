import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User
  ) {}

  async create(dto: CreateUserDto) {
    if(!dto){
      throw new HttpException('Данные для создания не переданы', HttpStatus.BAD_REQUEST);
    }

    const user = await this.userRepository.create(dto);

    return user;
  }

  async getOneById(id: number) {
    const user = await this.userRepository.findOne({
      where: {id}
    });

    if (!user) {
      throw new HttpException('Пользователь с таким логином не найден', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async getOneByLogin(login: string) {
    const user = await this.userRepository.findOne({
      where: {login}
    })

    if (!user) {
      throw new HttpException('Пользователь с таким логином не найден', HttpStatus.NOT_FOUND);
    }

    return user; 
  }

  async delete(id: number) {
    return await this.userRepository.destroy({
      where: {id}
    });
  }
}
