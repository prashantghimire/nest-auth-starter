import { Injectable } from '@nestjs/common';
import { compare, genSaltSync, hashSync } from 'bcryptjs';

@Injectable()
export class CryptoService {
  private salt = genSaltSync(10);

  hashPassword(password: string) {
    return hashSync(password, this.salt);
  }

  async matches(password: string, hash: string) {
    return compare(password, hash);
  }
}
