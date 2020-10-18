import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity("currency")
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  constructor(partial: Partial<CurrencyEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
