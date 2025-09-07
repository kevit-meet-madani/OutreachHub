export interface User{
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