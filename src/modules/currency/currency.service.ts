import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CurrencyEntity } from './currency.entity';

@Injectable()
export class CurrencyService {
  async create(data: CurrencyEntity) {
    return await getRepository(CurrencyEntity).create(data);
  }

  async findOne(id: number) {
    return await getRepository(CurrencyEntity).findOne({id});
  }

  async findAll() {
    return await getRepository(CurrencyEntity).find();
  }
}
