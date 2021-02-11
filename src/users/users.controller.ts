import {
  Body,
  Controller,
  Delete,
  HttpException,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import * as _ from 'lodash';
import { UserCreateRequestDto } from '../interfaces/user-create-request-dto';

@Controller('users')
export class UsersController {
  private logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async createUser(@Body() userCreateDTO: UserCreateRequestDto) {
    try {
      const result = await this.usersService.createUser(userCreateDTO);
      console.log(result, 'result');
      return _.omit(result, ['hashedPassword']);
    } catch (e) {
      console.log(e);
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete('')
  async deleteUser() {
    this.logger.log('request received');
    return 'deleted';
  }
}
