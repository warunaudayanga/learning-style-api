import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums/endpoint.enum";
import { IPaginatedResponse, IUserEntity } from "hichchi-nestjs-common/interfaces";
import { JwtAuthGuard } from "hichchi-nestjs-auth/auth/guards/jwt-auth.guard";
import { UserService } from "../services/user.service";
import { IPagination, Pager, Sorter } from "hichchi-nestjs-crud";
import { FilterUserDto } from "../dtos/filter-user.dto";
import { ISort } from "hichchi-nestjs-crud/types/sort.type";
import { UserEntity } from "../entities/user.entity";

@Controller(Endpoint.USER)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll(
        @Query() filters: FilterUserDto,
        @Sorter() sort: ISort<IUserEntity>,
        @Pager() pagination?: IPagination,
    ): Promise<IPaginatedResponse<UserEntity>> {
        return await this.userService.getMany({ filters, sort, pagination });
    }

    @Get("student")
    @UseGuards(JwtAuthGuard)
    async getAllStudents(
        @Query() filters: FilterUserDto,
        @Sorter() sort: ISort<IUserEntity>,
        @Pager() pagination?: IPagination,
    ): Promise<IPaginatedResponse<UserEntity>> {
        return await this.userService.getAllStudents(filters, sort, pagination);
    }

    @Get("student/:id")
    @UseGuards(JwtAuthGuard)
    async getStudentById(@Param("id") id: string): Promise<UserEntity> {
        return await this.userService.getStudentById(id);
    }
}
