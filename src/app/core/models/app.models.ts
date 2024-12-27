
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
}