export interface User{
    name:string;
    _id:string;
    email:string;
    password?:String;
    right:string;
}

export interface payload{
    id:string;
    right:string;
    role:string;
    exp: number;
    iat: number;
}