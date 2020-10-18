import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { InvoiceEntity } from './invoice.entity';

@Controller('invoice')
export class InvoiceController {

  constructor(private invoiceService: InvoiceService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: InvoiceEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create invoice',
  })
  @Post()
  create(@Body() data: CreateInvoiceDto) {
    return this.invoiceService.create(data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: InvoiceEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one invoice'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.invoiceService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [InvoiceEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all invoices'})
  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

}
