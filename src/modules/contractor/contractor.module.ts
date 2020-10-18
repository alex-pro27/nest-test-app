import { Module } from '@nestjs/common';
import { ContractorController } from './contractor.controller';
import { ContractorService } from './contractor.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [ContractorController],
  providers: [ContractorService],
  exports: [ContractorService],
  imports: [UsersModule],
})
export class ContractorModule {}
