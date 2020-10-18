import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate } from 'class-validator';

export class CreateStageContractDto {

  @ApiProperty({ description: 'Stage number' })
  @IsNotEmpty()
  stageNumber: number

  @ApiProperty({ description: 'Date start' })
  @IsNotEmpty()
  @IsDate()
  dateStart: Date;

  @ApiProperty({ description: 'Date end' })
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;

  @ApiProperty({ description: 'measure unit' })
  @IsNotEmpty()
  measureUnit: string

  @ApiProperty({ description: 'Sum' })
  @IsNotEmpty()
  sum: string

  @ApiProperty({ description: 'Count', default: 0 })
  @IsNotEmpty()
  count: number

  @ApiProperty({description: 'Contract ID'})
  @IsNotEmpty()
  contractID: number
}
