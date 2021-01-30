import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    { username: 'prashant', password: 'admin123' },
    { username: 'bob', password: '12345' },
  ];

  findOne(username, password) {
    return this.users.find((u) => {
      return u.username === username && u.password === password;
    });
  }
}
