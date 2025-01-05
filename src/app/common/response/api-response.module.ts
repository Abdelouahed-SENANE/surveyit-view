import { Survey  , Edition, Question, Answer, Chapter} from "../../core/models";



export interface SurveyListResponse {

    status: number;
    message: string;
    data: {
      surveys : Survey[] 
    }

  }
  export interface SurveyResponse {

    status: number;
    message: string;
    data: {
      survey: Survey
    }

  }

  export interface EditionResponse {
    status: number;
    message: string;
    data: {
      edition : Edition 
    }
  }

  export interface QuestionResponse {
    status: number;
    message: string;
    data: {
      question : Question 
    }
  }
  export interface AnswerListRespons {
    status: number;
    message: string;
    data: {
      answers : Answer[] 
    }
  }
  export interface AnswerResponse {
    status: number;
    message: string;
    data: {
      answer : Answer
    }
  }

  export interface ChapterResponse {
    status: number;
    message: string;
    data: {
      chapter : Chapter
    }
  }

  export interface SubchapterResponse {
    status: number;
    message: string;
    data: {
      subchapter : Chapter
    }
  }

  export interface ErrorResponse {
    message : string
    status : number
    timestamps : Date
  }

  export interface EditionListRespons {
    status: number;
    message: string;
    data: {
      editions : Edition[] 
    }
  }