import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { SignUpDto as Dto } from "@hichchi/nest-auth";
import { DoneICT, Gender } from "../enums";

export class SignUpDto extends Dto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    regNo: string;

    @IsNotEmpty()
    dob: string;

    @IsOptional()
    declare email: string;

    @IsNotEmpty()
    declare username: string;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender: string;

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
