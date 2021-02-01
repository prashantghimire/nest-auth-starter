import { Injectable } from '@nestjs/common';
import { compare, genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class CryptoService {
  private salt = genSaltSync(10);

  hashPassword(userDto: string) {
    return hashSync(userDto, this.salt);
  }

  async matches(password: string, hash: string) {
    return compare(password, hash);
  }
}
