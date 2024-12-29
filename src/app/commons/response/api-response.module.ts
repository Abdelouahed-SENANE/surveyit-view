import { Survey  , Edition, Question} from "../../core/models";



export interface SurveyListResponse {

    status: number;
    message: string;
    data: {
      surveys : Survey[] 
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
