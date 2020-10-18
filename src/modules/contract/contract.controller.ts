import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrUpdateContractDto } from './dto/create-or-update-contract.dto';
import { ContractEntity } from './contract.entity';

@Controller('contract')
export class ContractController {

  constructor(private contractService: ContractService) {
  }

  @ApiResponse({
    status: 200,
    type: [ContractEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all contract'})
  @Get()
  findAll() {
    return this.contractService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ContractEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create contract',
  })
  @Post()
  async create(@Body() data: CreateOrUpdateContractDto) {
    const newContract = await this.contractService.create(data);
    return newContract;
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ContractEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one Contract'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.contractService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Update one Contract'
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() data: CreateOrUpdateContractDto) {
    return this.contractService.findOneAndUpdate(id, data)
  }

}
