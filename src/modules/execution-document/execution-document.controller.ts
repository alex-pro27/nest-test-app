import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionDocumentService } from './execution-document.service';
import { CreateExecutionDocumentDto } from './dto/create-execution-document.dto';
import { ExecutionDocumentEntity } from './execution-document.entity';

@Controller('execution-document')
export class ExecutionDocumentController {

  constructor(private executionDocumentService: ExecutionDocumentService) {
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ExecutionDocumentEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Create execution document',
  })
  @Post()
  create(@Body() data: CreateExecutionDocumentDto) {
    return this.executionDocumentService.create(data);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ExecutionDocumentEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one contractor'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.executionDocumentService.findOne(id);
  }

  @ApiResponse({
    status: 200,
    type: [ExecutionDocumentEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all contractor'})
  @Get()
  findAll() {
    return this.executionDocumentService.findAll();
  }

}
