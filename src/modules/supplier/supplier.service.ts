import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { getRepository } from 'typeorm';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { SupplierEntity } from './supplier.entity';

@Injectable()
export class SupplierService {
  constructor(private usersService: UsersService) {
  }

  async create(userID: number, data: CreateSupplierDto) {
    const user = await this.usersService.findOne(userID);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await user.createSupplier({supplierName: data.name});
    return user.contractor;
  }

  async findOne(contractorID: number) {
    const contractor = await getRepository(SupplierEntity).findOne(contractorID);
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }
  }

  async findAll() {
    return await getRepository(SupplierEntity).find();
  }
}
