import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums/endpoint.enum";
import { QuizCollectionService } from "../services/quiz-collection.service";
import { QuizCollectionDto } from "../dtos/quiz-collection.dto";
import { QuizCollectionEntity } from "../entities/quiz-collection.entity";
import { SuccessResponse } from "hichchi-nestjs-common/responses";
import { JwtAuthGuard } from "hichchi-nestjs-auth/auth/guards/jwt-auth.guard";
import { CurrentUser } from "hichchi-nestjs-auth/auth/decorators/request-user.decorator";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";

@Controller(Endpoint.QUIZ)
export class QuizCollectionController {
    constructor(private readonly quizCollectionService: QuizCollectionService) {}

    @Post()
    @UseGuards(JwtAuthGuard)
    async saveQuizzes(@Body() quizCollectionDto: QuizCollectionDto): Promise<QuizCollectionEntity> {
        return await this.quizCollectionService.saveQuizCollection(quizCollectionDto);
    }

    @Get(":type")
    @UseGuards(JwtAuthGuard)
    async get(@Param("type") type: string, @CurrentUser() user: IUserEntity): Promise<QuizCollectionEntity> {
        return this.quizCollectionService.getQuizCollection(type, user.id);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async delete(@Param("type") type: string): Promise<SuccessResponse> {
        return this.quizCollectionService.deleteQuizCollection(type);
    }
}
