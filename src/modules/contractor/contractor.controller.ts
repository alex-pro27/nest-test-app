import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ContractorService } from './contractor.service';
import { ContractorEntity } from './contractor.entity';
import { CreateContractorDto } from './dto/create-contractor.dto';

@Controller('contractor')
export class ContractorController {

  constructor(private contractorService: ContractorService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ContractorEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create contractor',
  })
  @Post(':userId')
  create(@Param('userId') id: number, @Body() data: CreateContractorDto) {
    return this.contractorService.create(id, data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ContractorEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one contractor'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractorService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [ContractorEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all contractor'})
  @Get()
  findAll() {
    return this.contractorService.findAll();
  }

}
