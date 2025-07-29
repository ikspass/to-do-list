import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async login (dto: AuthDto){
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async registration(dto: AuthDto){
    const candidate = await this.userService.getOneByLogin(dto.login);

    if(candidate){
      throw new HttpException('Пользователь с таким логином уже существует', HttpStatus.BAD_REQUEST)
    }

    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.create({login: dto.login, password: hashPassword})

    return this.generateToken(user);
  }

  private async generateToken(user: User){
    return {
      token: this.jwtService.sign({login: user.login})
    }
  }

  private async validateUser(dto: AuthDto){
    const user = await this.userService.getOneByLogin(dto.login);
    if(user && user.password){
      const passwordEquals = await bcrypt.compare(dto.password, user.password);

      if(passwordEquals){
        return user;
      }
      else{
        throw new UnauthorizedException({message: 'Некорректный пароль'})
      }
    }
    else{
      throw new UnauthorizedException({message: 'Некорректный логин'})
    }
  } 
}
