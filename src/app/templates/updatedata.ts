export interface UpdateTemplate{
    id?:string;
    name?:string;
    type?:string;
    createdBy?:Object;
    workspaceId?:string;
    createdAt?:Date;
    content?:Content
}

interface Content{
    text:string;
    imagePath?:string;
}