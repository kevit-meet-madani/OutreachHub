export interface User{
    email:string;
    password:String;
}

export interface payload{
    id:string;
    right:string;
    exp: number;
    iat: number;
}