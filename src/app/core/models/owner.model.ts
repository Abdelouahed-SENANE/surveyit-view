import { Survey } from "./survey.model"

export interface Owner {
    id: string
    name : string
    surveys : Survey[]
}