import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CurrencyEntity } from '../currency/currency.entity';
import { InvoiceEntity } from '../invoice/invoice.entity';

@Entity("execution_document")
export class ExecutionDocumentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'The createdAt Execution Document' })
  @Column({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

  @ApiProperty({ description: 'The type of Execution Document' })
  @Column()
  type: string;

  @ApiProperty({ description: 'The currency execution document' })
  @ManyToOne(() => CurrencyEntity, {nullable: true, onDelete: 'RESTRICT'})
  currency: CurrencyEntity;

  @OneToMany(() => InvoiceEntity, invoice => invoice.executionDocument, {onDelete: 'CASCADE'})
  invoices: InvoiceEntity[];

  constructor(partial: Partial<ExecutionDocumentEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
