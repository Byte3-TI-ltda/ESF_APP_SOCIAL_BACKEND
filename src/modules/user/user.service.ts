import { Injectable, Logger } from '@nestjs/common';
import { UserCreateDto } from './dtos/user-create.dto';

@Injectable()
export class UserService {

    private logger = new Logger(UserService.name);

    async create(dto: UserCreateDto): Promise<any> {
        this.logger.log('dto: ', dto);
    }
}
