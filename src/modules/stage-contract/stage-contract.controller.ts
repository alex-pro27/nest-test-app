import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { StageContractService } from './stage-contract.service';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { StageContractEntity } from './stage-contract.entity';
import { CreateStageContractDto } from './dto/create-stage-contract.dto';

@Controller('stage-contract')
export class StageContractController {

  constructor(private stageContractService: StageContractService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: StageContractEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create invoice',
  })
  @Post()
  create(@Body() data: CreateStageContractDto) {
    return this.stageContractService.create(data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: StageContractEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one stage contract'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.stageContractService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [StageContractEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all stage contract'})
  @Get()
  findAll() {
    return this.stageContractService.findAll();
  }

}
