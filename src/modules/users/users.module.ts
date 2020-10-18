import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { AuthModule } from '../../auth/auth.module'
import { UsersService } from './users.service';
import { UsersCommand } from './users.command';

@Module({
  imports: [AuthModule],
  controllers: [UsersController],
  providers: [UsersService, UsersCommand],
  exports: [UsersService]
})
export class UsersModule {}
