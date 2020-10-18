import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService],
  imports: [UsersModule],
})
export class SupplierModule {}
