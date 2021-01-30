import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(user: any) {
    if (!this.userService.findOne(user.username, user.password)) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: 'user' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
