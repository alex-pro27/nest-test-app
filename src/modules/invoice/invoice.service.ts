import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { getRepository } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';
import { ExecutionDocumentEntity } from '../execution-document/execution-document.entity';
import { StageContractEntity } from '../stage-contract/stage-contract.entity';

@Injectable()
export class InvoiceService {

  async create(data: CreateInvoiceDto) {
    const executionDocument = await getRepository(ExecutionDocumentEntity).findOne(data.executionDocumentID);
    if (!executionDocument) {
      throw new NotFoundException('Execution document not found');
    }
    const stageContract = await getRepository(StageContractEntity).findOne(data.stageContractID);

    if (!stageContract) {
      throw new NotFoundException('Stage Contract not found');
    }
    await getRepository(InvoiceEntity).create(new InvoiceEntity({
      ...data,
      executionDocument,
      stageContract,
    }));
  }

  async findOne(invoiceID: number) {
    const invoice = await getRepository(InvoiceEntity).findOne(invoiceID);
    if (!invoice) {
      throw new NotFoundException('Invoice not found');
    }
  }

  async findAll() {
    return await getRepository(InvoiceEntity).find();
  }


}
