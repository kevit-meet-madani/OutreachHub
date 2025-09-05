export interface Campaign{
    _id:string,
     name: string,
    status: string,
    content: string,
    workspaceId: Object,
    createdBy: Object,
    tags: string[],
    createdAt:Date
}