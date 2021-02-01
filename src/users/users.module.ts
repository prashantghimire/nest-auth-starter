import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from '../shared/shared.module';
import { CryptoService } from '../shared/crypto.service';

@Module({
  providers: [UsersService, CryptoService],
  imports: [TypeOrmModule.forFeature([User]), SharedModule],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
