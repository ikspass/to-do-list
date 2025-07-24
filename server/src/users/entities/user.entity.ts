import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Task } from "src/tasks/entities/task.entity";

interface UserCreationAttrs {
  name: string
  login: string
  password: string
}

@Table ({tableName: 'users', updatedAt: false, createdAt: false})
export class User extends Model <User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  declare id: number

  @ApiProperty({example: 'aboba', description: 'Логин'})
  @Column({type: DataType.STRING, allowNull: false})
  declare login: number

  @ApiProperty({example: 'Абоба', description: 'Имя'})
  @Column({type: DataType.STRING, allowNull: false})
  declare name: number

  @ApiProperty({example: '123456789', description: 'Пароль'})
  @Column({type: DataType.STRING, allowNull: false})
  declare password: number

  @HasMany(() => Task)
  tasks: Task[]
}
