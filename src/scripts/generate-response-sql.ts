// noinspection JSIgnoredPromiseFromCall

import { writeFileSync } from "fs";
import * as csv from "csvtojson";
import { v4 } from "uuid";

const userIds = [
    "0e0839bd-4a7b-411b-bb65-58c3760debdc",
    "118d98cd-f040-4aed-83ce-f3f31d5d11af",
    "1f14c90e-530d-4da2-a544-a495e81e15fc",
    "2510c954-aa9d-4514-9be9-b5863f2fdfcd",
    "2670cb93-e561-489c-8bad-4893d87d10da",
    "39a51e79-4c21-42c5-8200-1d0f8f1f7cf7",
    "45ca63b8-9463-4076-ae96-e43b7c641fdd",
    "49d74166-60e2-481b-90eb-7b7a02d30be7",
    "4fe07a23-94c2-4814-a2ef-dbdcd080e9b0",
    "5a543b32-5ebd-43cc-819c-6e2ccd7af77a",
    "6767c6f0-c836-4c9b-8a2e-8db600cbee4f",
    "69f8a751-94cd-48e4-9438-8069fc95aaa3",
    "75568996-1521-44a9-abfd-623eaf9218d3",
    "83f0ee1f-dfeb-4856-9f77-c25e43220687",
    "85689c40-7b8f-47fa-a210-37fd1887c8e7",
    "89dcb8c7-3393-4906-9cb8-e3da182345b3",
    "9185ef57-6dc1-4423-9e8c-7510b0e02f86",
    "a470b0fe-636f-4daa-af21-8ca856f678f4",
    "a9bb83a0-0ff8-4453-b3fe-f1d32c0dc5fe",
    "a9d2f642-979b-48f8-af69-be5d5e2ed498",
    "c756e2e6-2a74-49bc-9002-a984cfaa8c48",
    "cd427de7-03d8-47f4-a0ce-0a949fffb73e",
    "d7dfc8e7-bcd1-4e21-9a54-5fe8cf704218",
    "d87eb2db-2994-436f-a5f8-bfe87c7c9d0a",
    "e33835f3-32e4-4e17-84b1-e13dbd2238f2",
    "e57aba2c-281c-403d-8642-738c7df19fd1",
    "fe75d185-5c57-46a8-a2f0-6e670be91e5d",
];

const quizCollectionId = "b52909e1-ee08-4fa8-a2fc-d46b5c245400";

const quizzes = [
    {
        id: "2456c97f-ee2a-4b44-8583-ef3999bf573c",
        choices: [
            { id: "7010afbb-4261-4d6c-b6df-17a425a592c4", value: "1" },
            { id: "55c9433f-c5a3-4506-85f4-e15fea96aac0", value: "2" },
            { id: "594db42a-0ebb-4a40-8451-f759de525a9e", value: "3" },
            { id: "6f078dc6-0d6b-4ce4-ab92-7a975b1cb57d", value: "4" },
            { id: "6a91f453-1624-4fa2-9654-45d678b85913", value: "5" },
        ],
        options: [
            { id: "643c59c5-9a9d-4a1b-af26-6d58ca032a60", value: "" },
            { id: "b14c3c51-1483-4ea7-91d0-4b4cd0764e08", value: "" },
        ],
        multiple: false,
        question:
            "1.\tI find that I am more satisfied with my learning experience when it is customized to my learning style.",
    },
    {
        id: "079d221b-6077-495f-8664-41b701c157ca",
        choices: [
            { id: "f57cf8ba-8e41-4d2d-91b0-2db916085078", value: "1" },
            { id: "a1b97663-0ec7-4d80-994a-062f9f63aeca", value: "2" },
            { id: "d286fe72-3bd5-4220-ab61-ac8da5275a76", value: "3" },
            { id: "579fda57-c809-4f75-bdef-680e66591c83", value: "4" },
            { id: "f57272e8-c13a-4fe2-aaaa-656674aa81ca", value: "5" },
        ],
        options: [
            { id: "8ab534a7-646e-4dc9-ad2c-c03c4a5ddd20", value: "" },
            { id: "1ee4a38f-d706-43ad-ba32-8dc4095a7ac1", value: "" },
        ],
        multiple: false,
        question:
            "2.\tLearning in a way that suits my learning style makes me more interested and engaged in the subject matter.",
    },
    {
        id: "693abcd7-3931-474e-b811-30458005e871",
        choices: [
            { id: "865e56b4-e2da-4219-946c-d6b68ceee4d3", value: "1" },
            { id: "aee7ca3a-de99-4de3-96fa-7c1811b2f614", value: "2" },
            { id: "4ebe6951-757c-49c1-ab48-75dc2ae765be", value: "3" },
            { id: "ea3947d4-9b47-481b-83d8-4500571dc205", value: "4" },
            { id: "1332b721-2339-4d87-89c3-9b71a70e8580", value: "5" },
        ],
        options: [
            { id: "b83612bc-f503-4b47-8a77-b164ba187768", value: "" },
            { id: "ff01fd9a-f57c-45dd-921d-6fd0da99a34d", value: "" },
        ],
        multiple: false,
        question:
            "3.\tI am more likely to enjoy the learning process when it is personalized to my learning preferences.",
    },
    {
        id: "5ef71064-3ab2-4e49-a8cb-377920787b9f",
        choices: [
            { id: "88fcb78e-cfe5-4515-8c53-6f34313391ea", value: "1" },
            { id: "c6b56420-e77e-4c98-b6e7-ce675e44575f", value: "2" },
            { id: "ddaf4bba-662b-473d-abbe-50728c00d8d2", value: "3" },
            { id: "f5cfda48-dccb-45d1-8571-a183f9d7fd9a", value: "4" },
            { id: "f0f2ba24-95e2-4c6c-b51c-495e09e83eb9", value: "5" },
        ],
        options: [
            { id: "6d46aad4-b4bb-4bd7-8bfb-6ca340a930b7", value: "" },
            { id: "d89a593d-4185-449d-8ed1-afaa13cc1293", value: "" },
        ],
        multiple: false,
        question:
            "4.\tPersonalized learning based on my learning style enhances my motivation to continue learning and exploring the topic.",
    },
    {
        id: "4cc59984-e7f8-4f74-b47f-b29d2e2be81d",
        choices: [
            { id: "e44aae77-8f49-4f0d-891d-9876de5a3a74", value: "1" },
            { id: "3e100677-c164-4753-aeda-5b651d89e001", value: "2" },
            { id: "056bac4b-0065-4939-b973-d5c67b2198bc", value: "3" },
            { id: "d35c159b-a71c-4595-985b-2ab6339e2465", value: "4" },
            { id: "808330f7-67d9-4d1e-a41f-77c5cb792ca4", value: "5" },
        ],
        options: [
            { id: "fca98021-c3a9-4166-abb6-80ca34fa3c75", value: "" },
            { id: "ec1bc2e4-47f4-47cc-a8e7-5eddcb297eea", value: "" },
        ],
        multiple: false,
        question:
            "5.\tPersonalized learning, tailored to my learning style, increases my confidence in my ability to succeed in the learning tasks.",
    },
    {
        id: "3c3f557f-52ec-402f-b710-d94395e375fd",
        choices: [
            { id: "f90a29e0-ce90-4635-adbe-813c473a835c", value: "1" },
            { id: "b8263ea9-ec7e-4a53-a5f4-87986fe43421", value: "2" },
            { id: "ab9f9903-2d51-4b07-ae39-771ec873c6c1", value: "3" },
            { id: "9ebb0687-342e-42f2-aab6-24512a4a726c", value: "4" },
            { id: "f404b2d7-c47a-4a65-b0b0-4822419f7c6f", value: "5" },
        ],
        options: [
            { id: "0c7e5f41-cff7-49a4-99d2-c5eb45fb95c6", value: "" },
            { id: "a03e1f83-b2a6-483d-8f1f-921934b74ba4", value: "" },
        ],
        multiple: false,
        question:
            "6.\tLearning in a way that suits my learning style makes me more confident in my ability to apply what I've learned in practical situations.",
    },
    {
        id: "5c70cfa4-57fd-48dd-bbe7-338cb578ccdf",
        choices: [
            { id: "20a1dc8a-1e1a-4df3-b238-9fc5d19a9967", value: "1" },
            { id: "edffd43b-9b6b-444c-bc5b-e57836a0a5af", value: "2" },
            { id: "3a0c5b83-69b5-4443-b564-eb13a2b08914", value: "3" },
            { id: "2d69a0a4-12d8-411e-9cee-f885a9c7fae3", value: "4" },
            { id: "28d77850-443a-4314-a8cb-3687a377b586", value: "5" },
        ],
        options: [
            { id: "b20523b5-c65e-410a-b031-7ba43f50b83f", value: "" },
            { id: "b1992b98-d28a-4836-87da-0d529d5cdf9d", value: "" },
        ],
        multiple: false,
        question:
            "7.\tI find that I am more effective in retaining and recalling information when it is presented in a way that aligns with my learning style.",
    },
    {
        id: "cc9209de-6b0d-43f6-a5a0-cedb2c088b29",
        choices: [
            { id: "71505502-7ab2-475a-837c-2975c7e1666e", value: "1" },
            { id: "b7641bb0-b647-425d-a7e0-8ff0ae64bcde", value: "2" },
            { id: "754d2187-62d3-4351-a810-1df934b66934", value: "3" },
            { id: "c1843dab-c8a9-4ca1-9669-db7da2643641", value: "4" },
            { id: "8fddd69e-7334-4350-96cd-0ffb3198c2cf", value: "5" },
        ],
        options: [
            { id: "0f96b935-cfa2-41b6-b33f-ae17f9bbb5c2", value: "" },
            { id: "e6a003ea-3fd4-4513-905c-fbbb9ec3c79e", value: "" },
        ],
        multiple: false,
        question:
            "8.\tI believe that personalized learning based on my learning style enhances my overall effectiveness in the learning environment.",
    },
];

async function init(): Promise<void> {
    const answers = (await csv().fromFile("alf.csv")).map((obj) => {
        const data = Object.values(obj);
        data.shift();
        return data;
    });

    let sql = "";

    for (let i = 0; i < answers.length; i++) {
        const userId = userIds[i];
        const userAnswers = [];

        for (let j = 0; j < answers[i].length; j++) {
            userAnswers.push({
                id: quizzes[j].id, // Quiz id
                answer: [
                    {
                        id: v4, // uuid
                        value: answers[i][j],
                    },
                ],
            });
        }

        const jsonAnswers = JSON.stringify(userAnswers);

        sql += `INSERT INTO quiz_answers (id, quizCollectionId, userId, answers, result) VALUE (UUID(), '${quizCollectionId}', '${userId}', '${jsonAnswers}', NULL);\n`;
    }

    writeFileSync("alf.sql", sql);
}

init();
