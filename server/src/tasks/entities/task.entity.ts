import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { User } from "src/users/entities/user.entity";

interface TaskCreationAttrs {
  userId: number
  name: string
  description: string
  date: Date
}

@Table ({tableName: 'tasks', updatedAt: false, createdAt: false})
export class Task extends Model <Task, TaskCreationAttrs> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  declare id: number

  @ApiProperty({example: '1', description: 'Уникальный идентификатор пользователя'})
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER, allowNull: false})
  declare userId: number

  @BelongsTo(() => User)
  user: User;

  @ApiProperty({example: 'Разработать макет главной страницы', description: 'Название'})
  @Column({type: DataType.STRING, allowNull: false})
  declare name: string

  @ApiProperty({example: 'Создать визуальный макет главной страницы веб-приложения с учетом UX/UI.', description: 'Описание'})
  @Column({type: DataType.STRING})
  declare description: string

  @ApiProperty({example: '2025-07-24', description: 'Дата'})
  @Column({type: DataType.DATEONLY, allowNull: false})
  declare date: Date

  @ApiProperty({example: 'false', description: 'Статус'})
  @Column({type: DataType.BOOLEAN, allowNull: false})
  declare status: boolean
}
