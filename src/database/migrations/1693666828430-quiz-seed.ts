// noinspection JSUnusedGlobalSymbols

import { MigrationInterface, QueryRunner } from "typeorm"
import { IPatternQuiz, IQuiz } from "../../quiz/interfaces/quiz.interfaces";
import { PatternQuizCategory } from "../../quiz/enums/pattern-quiz-category.enum";
import { QuizCollectionEntity } from "../../quiz/entities/quiz-collection.entity";
import { v4 as uuid } from "uuid";
import { QuizType  } from "../../quiz/enums/quiz-type.enum";

export class QuizSeed1693666828430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const dtos = [
            {
                question: "I understand something better after I",
                choiceCategories: [],
                choices: [
                    {
                        value: "try it out.",
                        category: undefined,
                    },
                    {
                        value: "think it through.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I would rather be considered",
                choiceCategories: [],
                choices: [
                    {
                        value: "realistic.",
                        category: undefined,
                    },
                    {
                        value: "innovative.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I think about what I did yesterday, I am most likely to get",
                choiceCategories: [],
                choices: [
                    {
                        value: "a picture.",
                        category: undefined,
                    },
                    {
                        value: "words.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I tend to",
                choiceCategories: [],
                choices: [
                    {
                        value: "understand details of a subject but may be fuzzy about its overall structure.",
                        category: undefined,
                    },
                    {
                        value: "understand the overall structure but may be fuzzy about details.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I am learning something new, it helps me to",
                choiceCategories: [],
                choices: [
                    {
                        value: "talk about it.",
                        category: undefined,
                    },
                    {
                        value: "think about it.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "If I were a teacher, I would rather teach a course",
                choiceCategories: [],
                choices: [
                    {
                        value: "that deals with facts and real life situations.",
                        category: undefined,
                    },
                    {
                        value: "that deals with ideas and theories.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I prefer to get new information in",
                choiceCategories: [],
                choices: [
                    {
                        value: "pictures, diagrams, graphs, or maps.",
                        category: undefined,
                    },
                    {
                        value: "written directions or verbal information.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "Once I understand",
                choiceCategories: [],
                choices: [
                    {
                        value: "all the parts, I understand the whole thing.",
                        category: undefined,
                    },
                    {
                        value: "the whole thing, I see how the parts fit.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "In a study group working on difficult material, I am more likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "jump in and contribute ideas.",
                        category: undefined,
                    },
                    {
                        value: "sit back and listen.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I find it easier",
                choiceCategories: [],
                choices: [
                    {
                        value: "to learn facts.",
                        category: undefined,
                    },
                    {
                        value: "to learn concepts.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "In a book with lots of pictures and charts, I am likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "look over the pictures and charts carefully.",
                        category: undefined,
                    },
                    {
                        value: "focus on the written text.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I solve maths problems",
                choiceCategories: [],
                choices: [
                    {
                        value: "I usually work my way to the solutions one step at a time.",
                        category: undefined,
                    },
                    {
                        value: "I often just see the solutions but then have to struggle to figure out the steps to get to them.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "In classes I have taken",
                choiceCategories: [],
                choices: [
                    {
                        value: "I have usually got to know many of the students.",
                        category: undefined,
                    },
                    {
                        value: "I have rarely got to know many of the students.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "In reading non-fiction, I prefer",
                choiceCategories: [],
                choices: [
                    {
                        value: "something that teaches me new facts or tells me how to do something.",
                        category: undefined,
                    },
                    {
                        value: "something that gives me new ideas to think about.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I like teachers",
                choiceCategories: [],
                choices: [
                    {
                        value: "who put a lot of diagrams on the board.",
                        category: undefined,
                    },
                    {
                        value: "who spend a lot of time explaining.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I'm analysing a story or a novel",
                choiceCategories: [],
                choices: [
                    {
                        value: "I think of the incidents and try to put them together to figure out the themes.",
                        category: undefined,
                    },
                    {
                        value: "I just know what the themes are when I finish reading and then I have to go back and find the incidents that demonstrate them.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I start a homework problem, I am more likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "start working on the solution immediately.",
                        category: undefined,
                    },
                    {
                        value: "try to fully understand the problem first.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I prefer the idea of",
                choiceCategories: [],
                choices: [
                    {
                        value: "certainty.",
                        category: undefined,
                    },
                    {
                        value: "theory.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I remember best",
                choiceCategories: [],
                choices: [
                    {
                        value: "what I see.",
                        category: undefined,
                    },
                    {
                        value: "what I hear.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "It is more important to me that an instructor",
                choiceCategories: [],
                choices: [
                    {
                        value: "lay out the material in clear sequential steps.",
                        category: undefined,
                    },
                    {
                        value: "give me an overall picture and relate the material to other subjects.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I prefer to study",
                choiceCategories: [],
                choices: [
                    {
                        value: "in a group.",
                        category: undefined,
                    },
                    {
                        value: "alone.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I am more likely to be considered",
                choiceCategories: [],
                choices: [
                    {
                        value: "careful about the details of my work.",
                        category: undefined,
                    },
                    {
                        value: "creative about how to do my work.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I get directions to a new place, I prefer",
                choiceCategories: [],
                choices: [
                    {
                        value: "a map.",
                        category: undefined,
                    },
                    {
                        value: "written instructions.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I learn",
                choiceCategories: [],
                choices: [
                    {
                        value: 'at a fairly regular pace. If I study hard, I\'ll "get it."',
                        category: undefined,
                    },
                    {
                        value: 'in fits and starts. I\'ll be totally confused and then suddenly it all "clicks."',
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I would rather first",
                choiceCategories: [],
                choices: [
                    {
                        value: "try things out.",
                        category: undefined,
                    },
                    {
                        value: "think about how I'm going to do it.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I am reading for enjoyment, I like writers to",
                choiceCategories: [],
                choices: [
                    {
                        value: "clearly say what they mean.",
                        category: undefined,
                    },
                    {
                        value: "say things in creative, interesting ways.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I see a diagram or sketch in class, I am most likely to remember",
                choiceCategories: [],
                choices: [
                    {
                        value: "the picture.",
                        category: undefined,
                    },
                    {
                        value: "what the instructor said about it.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When considering a body of information, I am more likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "focus on details and miss the big picture.",
                        category: undefined,
                    },
                    {
                        value: "try to understand the big picture before getting into the details.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I more easily remember",
                choiceCategories: [],
                choices: [
                    {
                        value: "something I have done.",
                        category: undefined,
                    },
                    {
                        value: "something I have thought a lot about.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I have to perform a task, I prefer to",
                choiceCategories: [],
                choices: [
                    {
                        value: "master one way of doing it.",
                        category: undefined,
                    },
                    {
                        value: "come up with new ways of doing it.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When someone is showing me data, I prefer",
                choiceCategories: [],
                choices: [
                    {
                        value: "charts or graphs.",
                        category: undefined,
                    },
                    {
                        value: "text summarizing the results.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When writing a paper, I am more likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "work on (think about or write) the beginning of the paper and progress forward.",
                        category: undefined,
                    },
                    {
                        value: "work on (think about or write) different parts of the paper and then order them.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I have to work on a group project, I first want to",
                choiceCategories: [],
                choices: [
                    {
                        value: 'have a "group brainstorming" where everyone contributes ideas.',
                        category: undefined,
                    },
                    {
                        value: "brainstorm individually and then come together as a group to compare ideas.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I consider it higher praise to call someone",
                choiceCategories: [],
                choices: [
                    {
                        value: "sensible.",
                        category: undefined,
                    },
                    {
                        value: "imaginative.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I meet people at a party, I am more likely to remember",
                choiceCategories: [],
                choices: [
                    {
                        value: "what they looked like.",
                        category: undefined,
                    },
                    {
                        value: "what they said about themselves.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I am learning a new subject, I prefer to",
                choiceCategories: [],
                choices: [
                    {
                        value: "stay focused on that subject, learning as much about it as I can.",
                        category: undefined,
                    },
                    {
                        value: "try to make connections between that subject and related subjects.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I am more likely to be considered",
                choiceCategories: [],
                choices: [
                    {
                        value: "outgoing.",
                        category: undefined,
                    },
                    {
                        value: "reserved.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I prefer courses that emphasise",
                choiceCategories: [],
                choices: [
                    {
                        value: "concrete material (facts, data).",
                        category: undefined,
                    },
                    {
                        value: "abstract material (concepts, theories).",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "For entertainment, I would rather",
                choiceCategories: [],
                choices: [
                    {
                        value: "watch television.",
                        category: undefined,
                    },
                    {
                        value: "read a book.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "Some teachers start their lectures with an outline of what they will cover. Such outlines are",
                choiceCategories: [],
                choices: [
                    {
                        value: "somewhat helpful to me.",
                        category: undefined,
                    },
                    {
                        value: "very helpful to me.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "The idea of doing homework in groups, with one grade for the entire group,",
                choiceCategories: [],
                choices: [
                    {
                        value: "appeals to me.",
                        category: undefined,
                    },
                    {
                        value: "does not appeal to me.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When I am doing long calculations,",
                choiceCategories: [],
                choices: [
                    {
                        value: "I tend to repeat all my steps and check my work carefully.",
                        category: undefined,
                    },
                    {
                        value: "I find checking my work tiresome and have to force myself to do it.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "I tend to picture places I have been",
                choiceCategories: [],
                choices: [
                    {
                        value: "easily and fairly accurately.",
                        category: undefined,
                    },
                    {
                        value: "with difficulty and without much detail.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
            {
                question: "When solving problems in a group, I would be more likely to",
                choiceCategories: [],
                choices: [
                    {
                        value: "think of the steps in the solution process.",
                        category: undefined,
                    },
                    {
                        value: "think of possible consequences or applications of the solution in a wide range of areas.",
                        category: undefined,
                    },
                ],
                sequence: undefined,
            },
        ];
        const pqs: Partial<IQuiz>[] = dtos.map((q, i) => {
            let cats: any[] = [];
            switch ((i + 1) % 4) {
                case 1:
                    cats = [PatternQuizCategory.Activist, PatternQuizCategory.Reflector];
                    break;
                case 2:
                    cats = [PatternQuizCategory.Sensing, PatternQuizCategory.Intuitive];
                    break;
                case 3:
                    cats = [PatternQuizCategory.Visual, PatternQuizCategory.Verbal];
                    break;
                case 0:
                    cats = [PatternQuizCategory.Sequential, PatternQuizCategory.Global];
                    break;
            }
            return {
                id: uuid(),
                question: q.question,
                choiceCategories: cats,
                choices: [
                    {
                        id: uuid(),
                        value: q.choices[0].value,
                        category: cats[0],
                    },
                    {
                        id: uuid(),
                        value: q.choices[1].value,
                        category: cats[1],
                    },
                ],
                sequence: i + 1,
            };
        });

        await queryRunner.manager.save(QuizCollectionEntity, {
            type: QuizType.STYLE,
            quizzes: pqs.map((pq: IPatternQuiz) => ({
                id: pq.id,
                question: pq.question,
                choices: pq.choices,
                choiceCategories: pq.choiceCategories,
                sequence: pq.sequence,
            })),
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM quizzes WHERE true;");
    }

}
