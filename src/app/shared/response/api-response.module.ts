import { Survey  , Edition, Question, Answer} from "../../core/models";



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
