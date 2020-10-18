import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity("supplier")
export class SupplierEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({description: 'supplier name'})
  @Column()
  name: string

  @OneToMany(type => UserEntity, user => user.supplier)
  users: UserEntity[];

  constructor(partial: Partial<SupplierEntity>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }
}
