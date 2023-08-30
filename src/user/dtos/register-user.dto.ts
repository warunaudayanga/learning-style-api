import { IsEnum, IsNotEmpty } from "class-validator";
import { RegisterDto } from "hichchi-nestjs-auth";
import { Gender } from "../enums/gender.enum";

export class RegisterUserDto extends RegisterDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    regNo: string;

    @IsNotEmpty()
    dob: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender: string;
}
