export interface QuestionCreateDTO {
    text : string
    type : string
    subchapterId : string | undefined
}

export interface SurveyRequestDTO {
    id? : string
    title? : string
    description? : string
    ownerId? : string
}


export interface AnswerRequestDTO {
        id? : string,
        text? : string,
        selectionCount? : number
        questionId? : string
}