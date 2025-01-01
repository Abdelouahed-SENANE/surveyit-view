
export interface Survey {
    id : string
    title : string 
    description : string
    editions : Edition[]
    owner : Owner
}

export interface Owner {
    id: string
    name : string
    surveys : Survey[]
}

export interface Edition {
    id : string 
    startDate : Date
    creationDate : Date
    year : number
    survey : Survey
    chapters : Chapter[]
}

export interface Chapter {
    id : string
    title : string
    subchapters : Chapter[]
    questions : Question[]

}

export interface Question{
    id : string 
    text : string
    type : string
    answerCount : number
    subchapter : Chapter
    answers : Answer[]
}

export interface Answer {
    id : string,
    text : string,
    selectionCount : number
    question : Question
}