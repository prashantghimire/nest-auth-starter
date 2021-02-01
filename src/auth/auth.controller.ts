import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto) {
    return this.authService.login(loginDto);
  }
}
