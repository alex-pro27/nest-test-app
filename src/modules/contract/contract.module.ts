import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { CurrencyModule } from '../currency/currency.module';
import { SupplierModule } from '../supplier/supplier.module';
import { ContractorModule } from '../contractor/contractor.module';

@Module({
  imports: [
    CurrencyModule,
    SupplierModule,
    ContractorModule,
  ],
  controllers: [ContractController],
  providers: [
    ContractService,
  ],
  exports: [ContractService],
})
export class ContractModule {}
