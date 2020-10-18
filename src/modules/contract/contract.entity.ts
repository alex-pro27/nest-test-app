import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CurrencyEntity } from '../currency/currency.entity';
import { ContractorEntity } from '../contractor/contractor.entity';
import { SupplierEntity } from '../supplier/supplier.entity';
import { ApiProperty } from '@nestjs/swagger';
import { StageContractEntity } from '../stage-contract/stage-contract.entity';

@Entity("contract")
export class ContractEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ApiProperty({description: 'Date Contract'})
  @Column({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date

  @ApiProperty({type: () => ContractEntity, description: 'Currency'})
  @ManyToOne(() => CurrencyEntity, {onDelete: 'RESTRICT', nullable: true})
  currency: CurrencyEntity;

  @ApiProperty({type: () => ContractorEntity, description: 'Contractor'})
  @ManyToOne(() => ContractorEntity, {onDelete: 'RESTRICT'})
  contractor: ContractorEntity;

  @ApiProperty({type: () => SupplierEntity, description: 'Supplier'})
  @ManyToOne(() => SupplierEntity, {onDelete: 'RESTRICT'})
  supplier: SupplierEntity;

  @OneToMany(() => StageContractEntity, stage => stage.contract)
  stages: StageContractEntity[];

  constructor(partial: Partial<ContractEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
