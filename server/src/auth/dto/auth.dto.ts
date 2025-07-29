import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class AuthDto {
  @ApiProperty({example: 'ikspass', description: 'Логин'})
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @Length(5, 20, {message: 'Должно содержать от 5 до 20 символов'})
  readonly login: string;

  @ApiProperty({example: '123456789', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({ message: 'Не должно быть пустым' })
  @Length(9, 20, {message: 'Должно содержать от 9 до 20 символов'})
  readonly password: string;
}
