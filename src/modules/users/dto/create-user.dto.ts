import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsEmail, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({
    example: 'test user',
    description: 'username of the User'
  })
  @Length(5, 20)
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({
    description: 'first name of the User'
  })
  readonly firstName: string;

  @ApiProperty({
    description: 'last name of the User'
  })
  readonly lastName: string;

  @ApiProperty({
    example: 'example@mail.com',
    description: 'The email of the User'
  })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string

  @ApiProperty({
    example: '0',
    description: 'The password of the User'
  })
  @IsNotEmpty()
  readonly password: string

}
