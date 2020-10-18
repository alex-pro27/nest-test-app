import { Injectable, NotFoundException } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { ExecutionDocumentEntity } from './execution-document.entity';
import { CreateExecutionDocumentDto } from './dto/create-execution-document.dto';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class ExecutionDocumentService {

  constructor(private currencyService: CurrencyService) {
  }

  async create(data: CreateExecutionDocumentDto) {
    const currency = await this.currencyService.findOne(data.currencyID);
    if (!currency) {
      throw new NotFoundException('Currency not found')
    }
    return await getRepository(ExecutionDocumentEntity).create(
      new ExecutionDocumentEntity({ ...data, currency })
    )
  }

  async findOne(id: number) {
    const executionDocument = await getRepository(ExecutionDocumentEntity).findOne({id})
    if (!executionDocument) {
      throw new NotFoundException('Execution document not found');
    }
    return executionDocument;
  }

  async findAll() {
    return await getRepository(ExecutionDocumentEntity).find();
  }
}
