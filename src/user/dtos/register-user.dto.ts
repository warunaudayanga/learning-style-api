import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { RegisterDto } from "hichchi-nestjs-auth";
import { Gender } from "../enums/gender.enum";
import { DoneICT } from "../../core/enums/done-ict.enum";

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

    @IsOptional()
    email: string;

    @IsOptional()
    cot: string;

    @IsOptional()
    cotOther: string;

    @IsOptional()
    olMaths: string;

    @IsOptional()
    olScience: string;

    @IsOptional()
    olEnglish: string;

    @IsOptional()
    alStream: string;

    @IsOptional()
    alOther: string;

    @IsOptional()
    alPassed: boolean;

    @IsOptional()
    doneIct: DoneICT;

    @IsOptional()
    comAppAssist3: boolean;

    @IsOptional()
    ict4: boolean;

    @IsOptional()
    hardware4: boolean;

    @IsOptional()
    network4: boolean;

    @IsOptional()
    graphic4: boolean;

    @IsOptional()
    icSupporter4: boolean;

    @IsOptional()
    softwareDev4: boolean;

    @IsOptional()
    followOther: boolean;

    @IsOptional()
    followedOther: string;
}
