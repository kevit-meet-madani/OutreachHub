export interface Workspace{
    _id?:string;
    name:string;
    createdBy?:Object;
    summary:string;
    createdAt?:Date
    count:number
}

export interface WorkUpdate{
     id?:string;
    name?:string;
    createdBy?:Object;
    summary?:string;
    createdAt?:Date
}

export interface User{
    name:string;
    email:string;
    password:string;
    right:string;
}
