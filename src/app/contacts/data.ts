export interface Contact{
    _id:string;
    name:string;
    phoneNumber:number;
    tag:string;
    createdBy:Object;
    workspace:string;
    createdAt:Date;
    data:Object[]
}

export interface PaginatedResponse {
  data: Contact[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
