export interface User{
    id:string;
    email:string;
    password:String;
}

export interface payload{
    id:string;
    right:string;
    role:string;
    exp: number;
    iat: number;
}