import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async getAll() {
    return ['Gabriel', 'Marcelo'];
  }
}
