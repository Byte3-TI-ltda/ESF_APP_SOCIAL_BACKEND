import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserCreateDto } from './dtos/user-create.dto';

@Controller('user')
@ApiTags('user')
export class UserController {

    constructor(private service: UserService) {}

    @Post('create')
    @ApiOperation({
        summary: 'cria um novo usuário',
        description: 'cria um novo usuário'
    })
    async create(@Body() dto: UserCreateDto): Promise<any>{
       return await this.service.create(dto);
    }
}
