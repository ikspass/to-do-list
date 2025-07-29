import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post('/registration')
  registration(@Body() dto: AuthDto) {
    return this.authService.registration(dto);
  }
}
