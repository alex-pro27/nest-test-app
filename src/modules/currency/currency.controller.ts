import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrencyEntity } from './currency.entity';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CurrencyEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create currency',
  })
  @Post()
  create(@Body() data: CurrencyEntity) {
    return this.currencyService.create(data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CurrencyEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one Currency'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.currencyService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [CurrencyEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all currency'})
  @Get()
  findAll() {
    return this.currencyService.findAll();
  }

}

