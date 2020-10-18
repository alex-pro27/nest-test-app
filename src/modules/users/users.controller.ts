import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { AuthService } from '../../auth/auth.service';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { LoginResponseDto } from './dto/login-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Controller('users')
export class UsersController {

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @ApiResponse({
    status: 200,
    type: [UserEntity]
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({description: 'Retrieve all Users'})
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: LoginResponseDto
  })
  @ApiOperation({
    description: 'Create one User',
  })
  @Post()
  async insert(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.insert(createUserDto)
    return await this.authService.login(newUser);
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UserEntity
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Retrieve one User'
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Update one User'
  })
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.findOneAndUpdate(id, updateUserDto)
  }

  @ApiResponse({
    status: 200,
    description: 'The found record is executed',
    type: Boolean
  })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description: 'Delete one User'
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }

}
