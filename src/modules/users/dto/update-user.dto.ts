import { ApiProperty } from '@nestjs/swagger';
import { Length, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    description: 'The name of the User',
  })
  @Length(5, 20)
  @IsOptional()
  readonly name: string;

  @ApiProperty({
    required: false,
    description: 'The referralCode of the User',
  })
  @Length(8, 8)
  @IsOptional()
  readonly referralCode: string;
}
