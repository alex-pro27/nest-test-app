import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, getRepository } from 'typeorm';
import { ContractorEntity } from '../contractor/contractor.entity';
import { SupplierEntity } from '../supplier/supplier.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity("user")
export class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'The username User' })
    @Column({unique: true})
    username: string;

    @ApiProperty({ description: 'The password User' })
    @Column()
    password: string;

    @ApiProperty({ description: 'The email User' })
    @Column({nullable: true})
    email: string;

    @ApiProperty({ description: 'The firs name User' })
    @Column({nullable: true})
    firstName: string;

    @ApiProperty({ description: 'The last name User' })
    @Column({nullable: true})
    lastName: string;

    @ApiProperty({ type: () => ContractorEntity, description: 'Contractor ptr' })
    @ManyToOne(
      () => ContractorEntity,
      contractor => contractor.users,
      {nullable: true, onDelete: 'CASCADE'})
    contractor: ContractorEntity;

    @ApiProperty({ type: () => SupplierEntity, description: 'Supplier ptr' })
    @ManyToOne(
      () => SupplierEntity,
      supplier => supplier.users,
      {nullable: true, onDelete: 'CASCADE'})
    supplier: SupplierEntity;

    @ApiProperty({ description: 'The createdAt of the User' })
    @Column({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @ApiProperty({ description: 'The updatedAt of the User' })
    @Column({type: 'timestamptz', nullable: true})
    updatedAt: Date;

    get isSupplier() {
        return this.supplier !== null;
    }

    get isContractor() {
        return this.contractor !== null;
    }

    async createContractor(data: { companyName: string }, commit = true) {
        this.contractor = new ContractorEntity({name: data.companyName});
        commit && await getRepository(UserEntity).save(this);
    }

    async createSupplier(data: { supplierName: string }, commit = true) {
        this.supplier= new SupplierEntity({name: data.supplierName});
        commit && await getRepository(UserEntity).save(this);
    }

    constructor(partial: Partial<UserEntity>) {
        if (partial) {
            Object.assign(this, partial);
            this.updatedAt = new Date();
        }
    }
}
