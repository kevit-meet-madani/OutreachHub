export interface Campaign{
    _id?:string,
     name: string,
    status: string,
    content: string,
    workspaceId: string,
    templateId:{
    type: 'text',
    content: {
      text:string
      imagePath: string
    },}
    createdBy?: Object,
    tags: string[],
    createdAt:Date
}


