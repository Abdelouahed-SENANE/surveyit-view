
export interface Survey {
    id : string
    name : string 
}

export interface Owner {
    id: string
    name : string
    surveys : Survey[]
}