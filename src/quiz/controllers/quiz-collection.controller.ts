import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums";
import { QuizCollectionService } from "../services/quiz-collection.service";
import { QuizCollectionDto } from "../dtos/quiz-collection.dto";
import { CurrentUser, JwtAuthGuard } from "@hichchi/nest-auth";
import { User } from "../../user/interfaces";
import { SuccessResponse } from "@hichchi/nest-connector";
import { QuizCollection } from "../interfaces";

@Controller(Endpoint.QUIZ)
export class QuizCollectionController {
    constructor(private readonly quizCollectionService: QuizCollectionService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll(@CurrentUser() user: User): Promise<QuizCollection[]> {
        return this.quizCollectionService.getAllQuizCollections(user.id);
    }

    @Get(":type")
    @UseGuards(JwtAuthGuard)
    async get(
        @CurrentUser() user: User,
        @Param("type") type: string,
        @Query("studentId") studentId?: string,
    ): Promise<QuizCollection> {
        return this.quizCollectionService.getQuizCollection(type, studentId || user.id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async saveQuizzes(@Body() quizCollectionDto: QuizCollectionDto): Promise<QuizCollection | null> {
        return await this.quizCollectionService.saveQuizCollection(quizCollectionDto);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async delete(@Param("type") type: string): Promise<SuccessResponse> {
        return this.quizCollectionService.deleteQuizCollection(type);
    }
}
