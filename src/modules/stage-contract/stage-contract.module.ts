import { Module } from '@nestjs/common';
import { StageContractController } from './stage-contract.controller';
import { StageContractService } from './stage-contract.service';
import { ContractModule } from '../contract/contract.module';
import { CurrencyModule } from '../currency/currency.module';

@Module({
  imports: [ContractModule, CurrencyModule],
  controllers: [StageContractController],
  providers: [
    StageContractService,
  ],
  exports: [StageContractService]
})
export class StageContractModule {}
