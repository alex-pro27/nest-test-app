import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsDate } from 'class-validator'


export class CreateInvoiceDto {

  @ApiProperty({description: 'Contract type'})
  @IsNotEmpty()
  readonly type: string;

  @ApiProperty({description: 'Execution document ID'})
  @IsNotEmpty()
  readonly executionDocumentID: string;

  @ApiProperty({ description: 'Stage Contract ID' })
  @IsNotEmpty()
  readonly stageContractID: number;

  @ApiProperty({description: 'Invoice position'})
  @IsNotEmpty()
  readonly position: number;

  @ApiProperty({description: 'Date finish'})
  @IsNotEmpty()
  @IsDate()
  readonly dateFinish: Date;

  @ApiProperty({description: 'Sum finish'})
  @IsNotEmpty()
  readonly sumFinish: string;

  @ApiProperty({description: 'Count'})
  @IsNotEmpty()
  readonly count: number;
}
