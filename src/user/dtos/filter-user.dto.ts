import { IsOptional } from "class-validator";

export class FilterUserDto {
    @IsOptional()
    name: string;
}
