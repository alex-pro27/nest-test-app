import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { comparePassword } from '../utils'
import { UserEntity } from '../modules/users/user.entity';
import { LoginResponseDto } from '../modules/users/dto/login-response.dto'
import { getRepository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await getRepository(UserEntity).findOne({
      where: {
        username
      }
    })

    if (user && (await comparePassword(password, user.password))) {
      const { password, ...result } = user
      return result
    }

    return null
  }

  async login(user: UserEntity): Promise<LoginResponseDto> {
    const { id } = user
    const payload = { sub: id }
    const expiresIn = 60 * 60 * 24 * 30

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn
      }),
      user,
      expiresIn
    }
  }
}
