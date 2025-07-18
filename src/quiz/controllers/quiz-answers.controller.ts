import { Body, Controller, Delete, Get, Param, Post, UseGuards } from "@nestjs/common";
import { Endpoint } from "../../core/enums";
import { QuizAnswerService } from "../services/quiz-answer.service";
import { QuizAnswersDto } from "../dtos/quiz-answers.dto";
import { QuizType } from "../enums";
import { CurrentUser, JwtAuthGuard } from "@hichchi/nest-auth";
import { User } from "../../user/interfaces";
import { SuccessResponse } from "@hichchi/nest-connector";
import { QuizAnswers } from "../interfaces";

@Controller(Endpoint.QUIZ_ANSWER)
export class QuizAnswersController {
    constructor(private readonly quizAnswerService: QuizAnswerService) {}

    @Post(":type")
    @UseGuards(JwtAuthGuard)
    async saveQuizAnswers(
        @CurrentUser() user: User,
        @Param("type") type: QuizType,
        @Body() quizAnswersDto: QuizAnswersDto,
    ): Promise<QuizAnswers | null> {
        return await this.quizAnswerService.saveQuizAnswers(user.id, type, quizAnswersDto);
    }

    @Get(":type")
    @UseGuards(JwtAuthGuard)
    async getQuizAnswers(@CurrentUser() user: User, @Param("type") type: QuizType): Promise<QuizAnswers> {
        return this.quizAnswerService.getQuizAnswers(user.id, type);
    }

    @Get(":type/:studentId")
    @UseGuards(JwtAuthGuard)
    async getStudentQuizAnswers(
        @Param("type") type: QuizType,
        @Param("studentId") studentId: string,
    ): Promise<QuizAnswers> {
        return this.quizAnswerService.getQuizAnswers(studentId, type);
    }

    @Delete()
    @UseGuards(JwtAuthGuard)
    async deleteQuizAnswers(@CurrentUser() user: User, @Param("type") type: QuizType): Promise<SuccessResponse> {
        return this.quizAnswerService.deleteQuizAnswers(user.id, type);
    }
}
