import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStageContractDto } from './dto/create-stage-contract.dto';
import { ContractService } from '../contract/contract.service';
import { getRepository } from 'typeorm';
import { StageContractEntity } from './stage-contract.entity';

@Injectable()
export class StageContractService {

  constructor(private contractService: ContractService) {
  }

  async create(data: CreateStageContractDto) {
    const contract = await this.contractService.findOne(data.contractID);
    if (!contract) {
      throw new NotFoundException('Contract not found');
    }
    return await getRepository(StageContractEntity).create({
      ...data,
      contract,
    });
  }

  async findOne(stageContractID: number) {
    const stageContract = await getRepository(StageContractEntity).findOne(stageContractID);
    if (!stageContract) {
      throw new NotFoundException('Stage Contract not found');
    }
  }

  async findAll() {
    return await getRepository(StageContractEntity).find();
  }

}
