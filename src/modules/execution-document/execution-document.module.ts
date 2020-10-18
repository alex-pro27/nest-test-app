import { Module } from '@nestjs/common';
import { ExecutionDocumentController } from './execution-document.controller';
import { ExecutionDocumentService } from './execution-document.service';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  controllers: [ExecutionDocumentController],
  providers: [ExecutionDocumentService],
  exports: [ExecutionDocumentService],
  imports: [CurrencyModule],
})
export class ExecutionDocumentModule {}
