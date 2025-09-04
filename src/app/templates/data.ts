export interface Template{
    _id:string;
    name:string;
    type:string;
    tag:string;
    createdBy:Object;
    workspaceId:Object;
    createdAt:Date;
    content:Content
}

interface Content{
    text:string;
    imagePath?:string;
}