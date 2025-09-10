export interface Workspace{
    _id?:string;
    name:string;
    createdBy?:Object;
    summary:string;
    createdAt?:Date
}

export interface WorkUpdate{
     id?:string;
    name?:string;
    createdBy?:Object;
    summary?:string;
    createdAt?:Date
}
