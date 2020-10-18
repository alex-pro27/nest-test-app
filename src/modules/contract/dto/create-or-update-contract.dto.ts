import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsDate } from 'class-validator'

export class CreateOrUpdateContractDto {

  @ApiProperty({description: 'Stage Contract ID'})
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
  readonly sumFinish: number;

  @ApiProperty({description: 'Count'})
  @IsNotEmpty()
  readonly count: number;

  @ApiProperty({description: 'Supplier ID'})
  @IsNotEmpty()
  readonly supplierID: number;

  @ApiProperty({description: 'Contractor ID'})
  @IsNotEmpty()
  readonly contractorID: number;

  @ApiProperty({description: 'Currency ID'})
  @IsNotEmpty()
  readonly currencyID: number;
}
