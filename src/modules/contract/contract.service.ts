import { Injectable, NotFoundException } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { ContractEntity } from './contract.entity';
import { CreateOrUpdateContractDto } from './dto/create-or-update-contract.dto';
import { SupplierEntity } from '../supplier/supplier.entity';
import { ContractorEntity } from '../contractor/contractor.entity';
import { CurrencyService } from '../currency/currency.service';

@Injectable()
export class ContractService {

  constructor(private currencyService: CurrencyService) {
  }

  async create(data: CreateOrUpdateContractDto): Promise<ContractEntity> {
    const supplier = await getRepository(SupplierEntity).findOne(data.supplierID);
    if (!supplier) {
      throw new NotFoundException('Supplier not found');
    }
    const contractor = await getRepository(ContractorEntity).findOne(data.contractorID);
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }
    const currency = await this.currencyService.findOne(data.currencyID);
    if (!currency) {
      throw new NotFoundException('Currency not found');
    }
    return await getRepository(ContractEntity).save(new ContractEntity({
      ...data,
      contractor,
      supplier,
      currency,
    }));
  }

  async findAll(): Promise<ContractEntity[] | undefined> {
    return await getRepository(ContractEntity).find();
  }

  async findOne(id: number): Promise<ContractEntity | undefined> {
    return await getRepository(ContractEntity).findOne({id});
  }

  async findOneAndUpdate(
    id: number,
    data: CreateOrUpdateContractDto
  ): Promise<ContractEntity | undefined> {
    const foundContract = await this.findOne(id);
    if (!foundContract) {
      throw new NotFoundException('Contract not found');
    }
    const supplier = await getRepository(SupplierEntity).findOne(data.supplierID);
    if (!supplier) {
      throw new NotFoundException('Supplier not found');
    }
    const currency = await this.currencyService.findOne(data.currencyID);
    if (!currency) {
      throw new NotFoundException('Currency not found');
    }
    return await getRepository(ContractEntity).save(new ContractEntity({
      ...foundContract,
      ...data,
    }));
  }

  async deleteOne(id: number): Promise<boolean | undefined> {
    const foundContract = await getRepository(ContractEntity).findOne({id})
    if (!foundContract) {
      throw new NotFoundException('Contract not found.')
    }
    return !!(await getRepository(ContractEntity).delete(foundContract));
  }
}
