import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums/endpoint.enum";
import { SuccessResponse } from "hichchi-nestjs-common/responses";
import { QuizAnswerService } from "../services/quiz-answer.service";
import { QuizAnswersDto } from "../dtos/quiz-answers.dto";
import { CurrentUser } from "hichchi-nestjs-auth/auth/decorators/request-user.decorator";
import { IUserEntity } from "hichchi-nestjs-common/interfaces";
import { QuizAnswersEntity } from "../entities/quiz-answers.entity";
import { QuizType } from "../enums/quiz-type.enum";
import { JwtAuthGuard } from "hichchi-nestjs-auth/auth/guards/jwt-auth.guard";

@Controller(Endpoint.QUIZ_ANSWER)
export class QuizAnswersController {
    constructor(private readonly quizAnswerService: QuizAnswerService) {}

    @Post(":type")
    @UseGuards(JwtAuthGuard)
    async saveQuizAnswers(
        @Param("type") type: QuizType,
        @Body() quizAnswersDto: QuizAnswersDto,
        @CurrentUser() user: IUserEntity,
    ): Promise<QuizAnswersEntity> {
        return await this.quizAnswerService.saveQuizAnswers(user.id, type, quizAnswersDto);
    }

    @Get(":type")
    @UseGuards(JwtAuthGuard)
    async getQuizAnswers(@Param("type") type: QuizType, @CurrentUser() user: IUserEntity): Promise<QuizAnswersEntity> {
        return this.quizAnswerService.getQuizAnswers(user.id, type);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async deleteQuizAnswers(@Param("type") type: QuizType, @CurrentUser() user: IUserEntity): Promise<SuccessResponse> {
        return this.quizAnswerService.deleteQuizAnswers(user.id, type);
    }
}
