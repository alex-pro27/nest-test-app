import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateExecutionDocumentDto {

  @ApiProperty({ description: 'The type of Execution Document' })
  @IsNotEmpty()
  type: string;

  @ApiProperty({ description: 'The currency id execution document' })
  @IsNotEmpty()
  currencyID: number;

}
