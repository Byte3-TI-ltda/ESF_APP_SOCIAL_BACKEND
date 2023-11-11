import { ApiProperty } from "@nestjs/swagger";
import { UserInterface } from "../interfaces/user.interface";
import { IsEmail, MinLength } from "class-validator";
import { CustomStringValidation } from "src/common/decorators/custom-string-validation";

export class UserCreateDto implements UserInterface {
    @ApiProperty({
        description: 'nome do usuário',
        example: 'John Doe',
        minimum: 3
    })
    @CustomStringValidation()
    @MinLength(3)
    nome: string;

    @ApiProperty({
        description: 'e-mail do usuário',
        example: 'john.doe@example.com'
    })
    @CustomStringValidation()
    @IsEmail()
    email: string;

    @ApiProperty()
    @CustomStringValidation()
    whatsapp: string;

    @ApiProperty()
    @CustomStringValidation()
    password: string;
}