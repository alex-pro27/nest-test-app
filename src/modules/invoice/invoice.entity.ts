import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ExecutionDocumentEntity } from '../execution-document/execution-document.entity';
import { StageContractEntity } from '../stage-contract/stage-contract.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity("invoice")
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ type: () => ExecutionDocumentEntity, description: 'Execution Document' })
  @ManyToOne(() => ExecutionDocumentEntity, executionDoc => executionDoc.invoices, {onDelete: 'CASCADE'})
  executionDocument: ExecutionDocumentEntity;

  @ApiProperty({ type: () => StageContractEntity, description: 'Stage Contract' })
  @ManyToOne(() => StageContractEntity, stagesContract => stagesContract.invoices, {onDelete: 'RESTRICT'})
  stageContract: StageContractEntity;

  @ApiProperty({description: 'Invoice position'})
  @Column()
  position: number;

  @ApiProperty({description: 'Date finish'})
  @Column({type: 'timestamptz'})
  dateFinish: Date;

  @ApiProperty({description: 'Sum finish'})
  @Column('decimal', {precision: 5, scale: 2, default: '0.0'})
  sumFinish: string;

  @ApiProperty({description: 'Count', default: 0})
  @Column()
  count: number;

  constructor(partial: Partial<InvoiceEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
