import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateContractorDto } from './dto/create-contractor.dto';
import { getRepository } from 'typeorm';
import { ContractorEntity } from './contractor.entity';

@Injectable()
export class ContractorService {

  constructor(private usersService: UsersService) {
  }

  async create(userID: number, data: CreateContractorDto) {
    const user = await this.usersService.findOne(userID);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await user.createContractor({companyName: data.name});
    return user.contractor;
  }

  async findOne(contractorID: number) {
    const contractor = await getRepository(ContractorEntity).findOne(contractorID);
    if (!contractor) {
      throw new NotFoundException('Contractor not found');
    }
  }

  async findAll() {
    return await getRepository(ContractorEntity).find();
  }
}
