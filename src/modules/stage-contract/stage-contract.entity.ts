import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceEntity } from '../invoice/invoice.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ContractEntity } from '../contract/contract.entity';

@Entity("stage_contract")
export class StageContractEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Stage number' })
  @Column()
  stageNumber: number

  @ApiProperty({ description: 'Date start' })
  @Column({type: 'timestamptz'})
  dateStart: Date;

  @ApiProperty({ description: 'Date end' })
  @Column({type: 'timestamptz'})
  dateEnd: Date;

  @ApiProperty({ description: 'measure unit' })
  @Column()
  measureUnit: string

  @ApiProperty({ description: 'Sum' })
  @Column('decimal', {precision: 5, scale: 2, default: '0.0'})
  sum: string

  @ApiProperty({ description: 'Count', default: 0 })
  @Column()
  count: number

  @ManyToOne(() => ContractEntity, contract => contract.stages, {onDelete: 'CASCADE'})
  contract: ContractEntity;

  @OneToMany(() => InvoiceEntity, invoice => invoice.stageContract)
  invoices: InvoiceEntity[];

  constructor(partial: Partial<StageContractEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
