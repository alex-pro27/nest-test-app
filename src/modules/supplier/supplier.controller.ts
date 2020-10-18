import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { SupplierService } from './supplier.service';
import { SupplierEntity } from './supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';

@Controller('supplier')
export class SupplierController {
  constructor(private supplerService: SupplierService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: SupplierEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create supplier',
  })
  @Post(':userId')
  create(@Param('userId') id: number, @Body() data: CreateSupplierDto) {
    return this.supplerService.create(id, data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: SupplierEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one supplier'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.supplerService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [SupplierEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all contractor'})
  @Get()
  findAll() {
    return this.supplerService.findAll();
  }
}
