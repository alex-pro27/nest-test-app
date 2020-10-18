import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class LoginUserDto {
  @ApiProperty({
    example: 'username',
    description: 'The username of the User'
  })
  @IsNotEmpty()
  readonly username: string

  @ApiProperty({
    default: '0',
    example: '0',
    description: 'The password of the User'
  })
  @IsNotEmpty()
  readonly password: string
}
