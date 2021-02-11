import { Injectable } from '@nestjs/common';
import { User } from '../models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CryptoService } from '../shared/crypto.service';
import { UserCreateRequestDto } from '../interfaces/user-create-request-dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly cryptoService: CryptoService,
  ) {}

  async findOne(email, password) {
    const user = await this.usersRepository.findOne({ where: { email } });

    if (!user) return null;

    const passwordMatch = await this.cryptoService.matches(
      password,
      user.hashedPassword,
    );

    if (passwordMatch) {
      console.log('email/password match ', user);
      return user;
    }
    return null;
  }

  async createUser(userDto: UserCreateRequestDto) {
    const hashedPassword = this.cryptoService.hashPassword(userDto.password);
    const user = {
      email: userDto.email,
      fullName: userDto.fullName,
      hashedPassword: hashedPassword,
    };
    return this.usersRepository.save(user);
  }
}
