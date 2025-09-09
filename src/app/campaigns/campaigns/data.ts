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

export interface CampMess{
    campaignId?:string,
    workspaceId:string;
    createdBy?:Object;
    templateData:Object;
    tags:string[];
    contacts:string[]
    createdAt?:Date
}


