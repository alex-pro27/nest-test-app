import {
  Injectable,
  ForbiddenException,
  NotFoundException
} from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { getRepository } from 'typeorm'

import { UserEntity } from './user.entity'
import { hashPassword } from '../../utils'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {

  async create({username, password}): Promise<UserEntity> {
    return await getRepository(UserEntity).save({username, password: await hashPassword(password)});
  }

  async insert(createUserDto: CreateUserDto): Promise<UserEntity | undefined> {
    const { email } = createUserDto

    const existedUser = await getRepository(UserEntity).findOne({ email })

    if (existedUser) {
      throw new ForbiddenException('Email already existed.')
    }

    return await getRepository(UserEntity).save(
      new UserEntity({
        ...createUserDto,
        contractor: null, // FIXME
        supplier: null, // FIXME
        password: await hashPassword(createUserDto.password)
      })
    )
  }

  async findAll(): Promise<UserEntity[] | undefined> {
    return getRepository(UserEntity).find()
  }

  async findOne(id: number): Promise<UserEntity | undefined> {
    const foundUser = await getRepository(UserEntity).findOne({ id })

    if (!foundUser) {
      throw new NotFoundException('User not found.')
    }

    return foundUser
  }

  async findOneAndUpdate(
    id: number,
    updateUserDto: UpdateUserDto
  ): Promise<UserEntity | undefined> {
    const foundUser = await getRepository(UserEntity).findOne({ id })

    if (!foundUser) {
      throw new NotFoundException('User not found.')
    }

    return await getRepository(UserEntity).save(
      new UserEntity({
        ...foundUser,
        ...updateUserDto
      })
    );
  }

  async deleteOne(id: number): Promise<boolean | undefined> {
    const foundUser = await getRepository(UserEntity).findOne({ id })

    if (!foundUser) {
      throw new NotFoundException('User not found.')
    }

    return !!(await getRepository(UserEntity).delete(foundUser));
  }

  async findOneWithEmail(email: string): Promise<UserEntity | undefined> {
    const foundUser = await getRepository(UserEntity).findOne({ email })

    if (!foundUser) {
      throw new NotFoundException('User not found.')
    }

    return foundUser;
  }
}
