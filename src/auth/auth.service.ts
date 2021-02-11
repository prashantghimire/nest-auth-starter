import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from '../interfaces/login-request-dto';
import { LoginResponse } from '../interfaces/login-response';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginRequestDto): Promise<LoginResponse> {
    const verifiedUser = await this.userService.findOne(
      loginDto.email,
      loginDto.password,
    );

    if (!verifiedUser) {
      throw new UnauthorizedException();
    }

    const payload = { username: verifiedUser.email, sub: 'user' };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
