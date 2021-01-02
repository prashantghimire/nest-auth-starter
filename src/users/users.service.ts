import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOne() {
    return {
      name: 'prashant',
      email: 'pras.ghim@gmai.com',
    };
  }
}
