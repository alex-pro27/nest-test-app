import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateSupplierDto {
  @ApiProperty({description: 'Supplier name'})
  @IsNotEmpty()
  name: string;
}
