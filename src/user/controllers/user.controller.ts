import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums";
import { UserService } from "../services/user.service";
import { Pager, Sorter, SortOptions } from "@hichchi/nest-crud";
import { FilterUserDto } from "../dtos/filter-user.dto";
import { PaginatedResponse, Pagination } from "@hichchi/nest-connector/crud";
import { User } from "../interfaces";
import { JwtAuthGuard } from "@hichchi/nest-auth";

@Controller(Endpoint.USER)
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getMany(
        @Query() filters: FilterUserDto,
        @Sorter() sort: SortOptions<User>,
        @Pager({ page: 1, limit: 20 }) pagination: Pagination,
    ): Promise<PaginatedResponse<User>> {
        return await this.userService.getMany({ filters, sort, pagination });
    }

    @Get("student")
    @UseGuards(JwtAuthGuard)
    async getAllStudents(
        @Query() filters: FilterUserDto,
        @Sorter() sort: SortOptions<User>,
        @Pager({ page: 1, limit: 20 }) pagination: Pagination,
    ): Promise<PaginatedResponse<User>> {
        return await this.userService.getAllStudents(filters, sort, pagination);
    }

    @Get("student/:id")
    @UseGuards(JwtAuthGuard)
    async getStudentById(@Param("id") id: string): Promise<User> {
        return await this.userService.getStudentById(id);
    }
}
