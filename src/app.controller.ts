import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginResponseDto } from './modules/users/dto/login-response.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiImplicitBody } from '@nestjs/swagger/dist/decorators/api-implicit-body.decorator';
import { AuthService } from './auth/auth.service';
import { LoginUserDto } from './modules/users/dto/login-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: LoginResponseDto
  })
  @UseGuards(AuthGuard('local'))
  @ApiOperation({
    description: 'Retrieve one Access token'
  })
  @Post('login')
  @ApiImplicitBody({ content: undefined, name: 'input', type: LoginUserDto })
  login(@Request() req): Promise<LoginResponseDto> {
    return this.authService.login(req.user)
  }
}
