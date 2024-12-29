export interface QuestionCreateDTO {
    text : string
    type : string
    subchapterId : string | undefined
}

export interface SurveyCreateDTO {
    title : string
    description : string
    ownerId : string
}