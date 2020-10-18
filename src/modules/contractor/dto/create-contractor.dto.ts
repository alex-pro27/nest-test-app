import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'

export class CreateContractorDto {
  @ApiProperty({description: 'Company name'})
  @IsNotEmpty()
  name: string;
}
