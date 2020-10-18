import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity("contractor")
export class ContractorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: 'Company name'})
  @Column()
  name: string;

  @OneToMany(type => UserEntity, user => user.contractor)
  users: UserEntity[];

  constructor(partial: Partial<ContractorEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
