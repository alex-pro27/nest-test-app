import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConsoleModule } from 'nestjs-console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmService, LoggerService } from './config';
import { UsersModule } from './modules/users/users.module';
import { ContractModule } from './modules/contract/contract.module';
import { ContractorModule } from './modules/contractor/contractor.module';
import { ExecutionDocumentModule } from './modules/execution-document/execution-document.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { SupplierModule } from './modules/supplier/supplier.module';
import { StageContractModule } from './modules/stage-contract/stage-contract.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { UsersController } from './modules/users/users.controller';
import { AuthModule } from './auth/auth.module';
import { SupplierController } from './modules/supplier/supplier.controller';

@Module({
  imports: [
    ConsoleModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService
    }),
    HttpModule,
    UsersModule,
    ContractModule,
    ContractorModule,
    ExecutionDocumentModule,
    InvoiceModule,
    SupplierModule,
    StageContractModule,
    CurrencyModule,
    AuthModule,
  ],
  controllers: [
    AppController,
    UsersController,
    SupplierController,
  ],
  providers: [
    AppService,
    LoggerService,
  ],
})
export class AppModule {}
