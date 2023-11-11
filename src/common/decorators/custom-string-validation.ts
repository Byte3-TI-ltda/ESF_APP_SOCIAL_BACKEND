import { applyDecorators } from "@nestjs/common";
import { Transform } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export function CustomStringValidation(): PropertyDecorator {
    return applyDecorators(
        IsNotEmpty(),
        IsString(),
        Transform(({ value }) => value.trim())
    )
}